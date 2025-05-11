import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

Hey there! I'm Seto Elkahfi, a [level 10](https://www.google.com/maps/contrib/100272628666117256890/reviews/@49.1176936,-29.4909116,11539295m/data=!3m1!1e3!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D) (and [level 9](https://www.google.com/maps/contrib/100831867194646974511/reviews/@59.3036556,17.9778991,4395m/data=!3m1!1e3!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D)) participant in the Google Local Guide program. I live to travel and eat out at nice restaurants or street food stalls around the world.

These places have at least 4.2-star reviews on Google Maps. That's the value this blog lives by.

Let's go on an adventure!

Love,

Seto Elkahfi`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Seto Elkahfi and his travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Seto Elkahfi and his travel adventures",
      images: [
        signOgImageUrl({
          title: "Seto Elkahfi",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown
          components={{
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        >
          {content}
        </Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
