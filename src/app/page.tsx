import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Real Estate Website</title>
      </Head>
      <Script
        id="voiceflow"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '64fc255775914d0007de1ca7' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
              });
            }
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
        })(document, 'script');
      `,
        }}
      />

      <header className="text-center text-4xl mb-4">
        Welcome to Our Real Estate Website
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl text-white">Find Your Dream Home</h1>
        </div>
      </section>

      {/* Property Listings */}
      <section className="my-8">
        <h2 className="text-4xl text-center mb-4">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="https://picsum.photos/seed/property1/400/300"
              alt="Property 1"
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h3 className="text-2xl mb-2">Property 1</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="https://picsum.photos/seed/property2/400/300"
              alt="Property 2"
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h3 className="text-2xl mb-2">Property 2</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="https://picsum.photos/seed/property3/400/300"
              alt="Property 3"
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h3 className="text-2xl mb-2">Property 3</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="my-8">
        <h2 className="text-4xl text-center mb-4">Contact Us</h2>
        <form className="bg-white p-4 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea className="w-full p-2 h-32 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
