import * as HoverCard from "@radix-ui/react-hover-card";

type Props = {
  href: string;
  children: React.ReactNode;
  title: string;
  type: string;
};

const HoverCardDemo = ({ href, children, title, type }: Props) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a
          className="inline-block cursor-pointer outline-none"
          href={href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {href}
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
          side="right"
          sideOffset={5}
        >
          <div className="flex flex-col gap-[7px]">
            <div className="flex flex-col gap-[15px]">
              <div>
                <div className="text-mauve12 m-0 text-[15px] font-semibold leading-[1.5]">
                  {title}
                </div>
                <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                  {type}
                </div>
              </div>
              <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
                Components, icons, colors, and templates for building
                high-quality, accessible UI. Free and open-source.
              </div>
              <div>{children}</div>
            </div>
          </div>

          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default HoverCardDemo;
