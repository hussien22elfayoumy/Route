import heroImage from "../assets/heroImage.svg";
import Header from "../components/Header";
export default function Home() {
  return (
    <section className="bg-green-light text-zinc-100">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-5 py-28">
          <div className="mb-10 w-[250px]">
            <img src={heroImage} className="w-full" alt="hero image" />
          </div>

          <Header
            title="start framework"
            color="zinc-100"
            bgColor="green-light"
          />
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </section>
  );
}
