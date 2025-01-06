import Header from "../components/Header";

export default function Contact() {
  return (
    <section className="bg-zinc-50">
      <div className="container mx-auto min-h-screen py-28">
        <Header title="conatct section" color="blue-dark" bgColor="zinc-50" />
        <form className="mx-auto mt-10 max-w-[800px] space-y-6 p-5">
          <input
            type="text"
            className="w-full rounded-lg p-4 shadow-sm"
            placeholder="User Name"
          />
          <input
            type="text"
            className="w-full rounded-lg p-4 shadow-sm"
            placeholder="User Age"
          />
          <input
            type="email"
            className="w-full rounded-lg p-4 shadow-sm"
            placeholder="User Email"
          />
          <input
            type="password"
            className="w-full rounded-lg p-4 shadow-sm"
            placeholder="User Password"
          />
          <button
            type="button"
            className="bg-green-light rounded-lg p-2 text-zinc-100 shadow-sm"
          >
            Send Message
          </button>
        </form>
      </div>
      f
    </section>
  );
}
