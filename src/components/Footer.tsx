"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-12">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
        <div className="text-xs text-muted-foreground hidden lg:block">
          {`Blog powered by `}
          <Link
            href={`https://wisp.blog/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            wisp
          </Link>
          {`. Deployed on `}
          <Link
              href={`https://smbcloud.xyz/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              smbCloud
            </Link>
          {`. See `}
          <Link
            href="https://github.com/smbcloudXYZ/foodandtravel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            the source code
          </Link>
          {`.`}
        </div>
        <div>
          <Link href="/rss">
            <Button variant="ghost" className="p-2">
              <Rss className="w-4 h-4" />
            </Button>
          </Link>
          <DarkModeToggle />
        </div>
      </div>
      <div className="text-xs text-muted-foreground lg:hidden">
        <Link
          href={`https://wisp.blog/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog powered by wisp
        </Link>
        <span>{` · `}</span>
        <Link
          href="https://github.com/setoelkahfi/foodandtravel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See source code
        </Link>
      </div>
    </section>
  );
};
