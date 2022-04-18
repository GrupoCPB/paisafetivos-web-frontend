import { Container } from "style/reset";

export function HowToHelp() {
  return(
    <Container>
      <h1>FormSubmit Demo</h1>
      <form target="_blank" action="https://formsubmit.co/cristoshiwassaki@gmail.com" method="POST">
        <div>
          <div>
            <div>
              <input type="text" name="name" placeholder="Full Name" required />
            </div>
          </div>
        </div>
        <div>
          <textarea placeholder="Your Message" name="message" rows="10" required></textarea>
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </Container>
  )
}