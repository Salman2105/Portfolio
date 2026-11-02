import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import emailjs from "@emailjs/browser";
import Contact from "../components/contact";
vi.mock("@emailjs/browser", () => ({ default: { send: vi.fn() } }));
vi.mock("react-hot-toast", () => ({
  default: { success: vi.fn(), error: vi.fn() },
}));
vi.mock("../components/ui", () => ({
  Reveal: ({ children }) => <div>{children}</div>,
  ExternalLink: ({ href, children }) => <a href={href}>{children}</a>,
}));
function fillForm() {
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Test Recruiter" },
  });
  fireEvent.change(screen.getByLabelText("Email address"), {
    target: { value: "recruiter@example.com" },
  });
  fireEvent.change(screen.getByLabelText("What would you like to discuss?"), {
    target: { value: "A full stack developer opportunity." },
  });
}
describe("Contact form delivery states", () => {
  it("sends the expected EmailJS fields and clears only after success", async () => {
    let finish;
    emailjs.send.mockImplementation(
      () =>
        new Promise((resolve) => {
          finish = resolve;
        }),
    );
    render(<Contact />);
    fillForm();
    fireEvent.submit(
      screen.getByRole("button", { name: "Send message" }).closest("form"),
    );
    expect(
      screen.getByRole("button", { name: /Sending your message/ }),
    ).toBeDisabled();
    expect(screen.getByLabelText("Your name")).toHaveValue("Test Recruiter");
    expect(emailjs.send).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      {
        from_name: "Test Recruiter",
        from_email: "recruiter@example.com",
        message: "A full stack developer opportunity.",
        to_name: "Salman",
      },
      expect.any(String),
    );
    finish({ status: 200 });
    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent(
        "Your message has been sent",
      ),
    );
    expect(screen.getByLabelText("Your name")).toHaveValue("");
    expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled();
  });
  it("preserves the message and provides a direct-email alternative after failure", async () => {
    emailjs.send.mockRejectedValue(new Error("Network unavailable"));
    render(<Contact />);
    fillForm();
    fireEvent.submit(
      screen.getByRole("button", { name: "Send message" }).closest("form"),
    );
    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent("email me directly"),
    );
    expect(
      screen.getByLabelText("What would you like to discuss?"),
    ).toHaveValue("A full stack developer opportunity.");
    expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled();
    expect(
      screen.getByRole("link", { name: "salmanahmed21205@gmail.com" }),
    ).toHaveAttribute("href", "mailto:salmanahmed21205@gmail.com");
  });
  it("does not transmit honeypot submissions", () => {
    render(<Contact />);
    fillForm();
    fireEvent.change(screen.getByLabelText("Website"), {
      target: { value: "bot.example.com" },
    });
    fireEvent.submit(
      screen.getByRole("button", { name: "Send message" }).closest("form"),
    );
    expect(emailjs.send).not.toHaveBeenCalled();
  });
});
