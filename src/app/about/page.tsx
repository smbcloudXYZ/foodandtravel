import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Seto Elkahfi](https://scontent.fbma6-1.fna.fbcdn.net/v/t51.75761-15/485399943_18494150992039285_6263507236870354095_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sWdLkTra3OoQ7kNvwGMem_w&_nc_oc=AdkpMXfo-yENMzwWytJ_Knk3BU89adTB_G84GILRNow8QvVKuneTwsEYe-AjTeVHFXE&_nc_zt=23&_nc_ht=scontent.fbma6-1.fna&_nc_gid=OCvJgq1suc2IChY6t_N77Q&oh=00_AfEFUTC1NJyxUq83mPhLUrDEIZwubLL3HUCH8-vQs66PJQ&oe=68084712)

Hey there! I'm Seto Elkahfi, a 28-year-old former corporate warrior who decided to ditch the 9-to-5 grind and embark on an adventure of a lifetime. After years of hustling in a high-pressure job, I realized that life is too short to be stuck in an office, staring at spreadsheets all day.

So I took a leap of faith, quit my cushy job in Singapore, and decided to see the world on my own terms. No more stuffy meetings or rigid schedules – just me, my backpack, and an open road ahead.

![Seto Elkahfi](https://scontent.fbma6-1.fna.fbcdn.net/v/t51.75761-15/491440124_18499362301039285_1897311375360762227_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=j8ojDbCNFIwQ7kNvwGvAnYz&_nc_oc=AdkRQNtEqIFJnhWns0CZ7iJztBMGm9hpMLr8VcFUPGA5u9Z17jTuCJx0JEBqrD7J5qg&_nc_zt=23&_nc_ht=scontent.fbma6-1.fna&_nc_gid=2hoj340hAg6f6UY0rryEXg&oh=00_AfHxX9A6bn6Ho_h9b74n5GECp_ZG7PSAAZCWQN8KET47Yg&oe=68081887)

This blog is where I'll be documenting my travels, sharing my experiences, and hopefully inspiring others to follow their wanderlust. From trekking through remote villages to savoring local cuisines, I'm on a mission to immerse myself in different cultures and create memories that will last a lifetime.

But this journey isn't just about checking off destinations from a bucket list. It's about self-discovery, personal growth, and finding the courage to live life on my own terms. I'll be honest and raw, sharing the highs and lows, the moments of pure bliss and the inevitable challenges that come with solo travel.

So join me on this adventure, and let's explore the world together! Who knows, maybe my stories will inspire you to take that leap of faith and pursue your own dreams, whatever they may be.

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
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
