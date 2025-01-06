import Header from "../components/Header";

export default function About() {
  return (
    <section className="bg-green-light text-zinc-100">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-5">
        <Header
          title="about component"
          color="zinc-100"
          bgColor="green-light"
        />
        <div className="grid grid-cols-2 gap-10">
          <p className="ms-auto max-w-[80%]">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="me-auto max-w-[80%]">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </section>
  );
}
