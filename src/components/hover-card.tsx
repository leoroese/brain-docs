import * as HoverCard from "@radix-ui/react-hover-card";

type Props = {
  href: string;
  hrefText: string;
  children: React.ReactNode;
  title: string;
  type: string;
};

const HoverCardDemo = ({
  href,
  hrefText = href,
  children,
  title,
  type,
}: Props) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a className="inline-block cursor-pointer outline-none" href={href}>
          {hrefText}
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[360px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all max-h-80 overflow-y-scroll"
          side="right"
          sideOffset={5}
        >
          <div className="flex flex-col gap-[7px]">
            <div className="flex flex-col gap-[15px]">
              <div>
                <a
                  href={href}
                  className="text-mauve12 dark:text-black m-0 text-[15px] font-semibold leading-[1.5]"
                >
                  {title}
                </a>
                <div className="text-mauve10 dark:text-slate-700 m-0 text-[15px] leading-[1.5]">
                  {type}
                </div>
              </div>
              <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
                {children}
              </div>
            </div>
          </div>

          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default HoverCardDemo;
