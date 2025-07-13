export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img
        src="https://www.makestar.com/_nuxt/error-image.D0Ia4RFE.svg"
        width={200}
        alt="image"
      />
      <p>Page not found</p>
      <a
        href="/"
        className="inline-block bg-pink-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-pink-600 transition-colors my-3"
      >
        Back to Home
      </a>
    </div>
  )
}
