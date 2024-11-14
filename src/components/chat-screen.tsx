
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { LuArrowUp, LuBot, LuChevronDown, LuClipboard, LuPaperclip, LuPen, LuRefreshCcw, LuSparkle, LuThumbsDown, LuThumbsUp, LuZap } from 'react-icons/lu'
import { SidebarTrigger } from './ui/sidebar'

export function ChatScreen () {
  return (

      <div className="flex flex-col mx-auto">
          <SidebarTrigger />
        <div className="sticky top-0 p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 rounded-xl px-3 h-10 data-[state=open]:bg-muted text-lg">
                ChatGPT <span className="text-muted-foreground">3.5</span>
                <LuChevronDown className="w-4 h-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="max-w-[300px]">
              <DropdownMenuItem className="items-start gap-2">
                <LuSparkle className="w-4 h-4 mr-2 translate-y-1 shrink-0" />
                <div>
                  <div className="font-medium">GPT-4</div>
                  <div className="text-muted-foreground/80">
                    With DALL-E, browing and analysis. Limit 40 messages / 3 hours
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="items-start gap-2">
                <LuZap className="w-4 h-4 mr-2 translate-y-1 shrink-0" />
                <div>
                  <div className="font-medium">GPT-3</div>
                  <div className="text-muted-foreground/80">Great for everyday tasks</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col items-start flex-1 max-w-2xl gap-8 px-4 mx-auto">
          <div className="flex items-start gap-4">
            <Avatar className="w-6 h-6 border">
              <AvatarImage src="/placeholder-user.jpg" alt="Image" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-bold">You</div>
              <div className="prose text-muted-foreground">
                <p>
                  Can you explain airplane turbulence to someone who has never flown before? Make it conversational and
                  concise.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="w-6 h-6 border">
              <AvatarImage src="/placeholder-user.jpg" alt="Image" />
              <AvatarFallback>OA</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-bold">ChatGPT</div>
              <div className="prose text-muted-foreground">
                <p>
                  Of course! Imagine you&apos;re in a car driving down a bumpy road, and the ride isn&apos;t perfectly
                  smooth. Sometimes, you hit small potholes or bumps, right? Well, when you&apos;re in an airplane,
                  it&apos;s kind of like that, but in the sky.
                </p>
                <p>
                  Airplane turbulence happens when the plane encounters pockets of air that are moving differently.
                  It&apos;s like sailing a boat on choppy water. These air pockets can make the plane feel like
                  it&apos;s bouncing or shaking a bit. It&apos;s completely normal and usually not dangerous at all.
                </p>
              </div>
              <div className="flex items-center gap-2 py-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <LuClipboard className="w-4 h-4" />
                  <span className="sr-only">Copy</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <LuThumbsUp className="w-4 h-4" />
                  <span className="sr-only">Upvote</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <LuThumbsDown className="w-4 h-4" />
                  <span className="sr-only">Downvote</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                >
                  <LuRefreshCcw className="w-4 h-4" />
                  <span className="sr-only">Regenerate</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-background">
          <div className="relative">
            <Textarea
              placeholder="Message ChatGPT"
              name="message"
              id="message"
              rows={1}
              className="min-h-[48px] rounded-3xl resize-none p-4 border border-neutral-400 shadow-sm px-16 max-h-24 overflow-hidden"
              style={{ fieldSizing: 'content' }}
            />
            <Button type="submit" size="icon" className="absolute w-8 h-8 bottom-3 right-3 rounded-full" disabled>
              <LuArrowUp className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </Button>
            <Button type="submit" size="icon" variant='ghost' className="absolute w-8 h-8 bottom-3 left-4 rounded-full" disabled>
              <LuPaperclip className="w-4 h-4 -rotate-45" size={28} />
              <span className="sr-only">Attachment</span>
            </Button>
          </div>
          <p className="text-xs font-medium text-center text-neutral-700">
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    // <div className="grid md:grid-cols-[260px_1fr] min-h-screen w-full bg-background dark:bg-gray-800 text-foreground dark:text-white">
      // {/* <LeftPanel /> */}
    // </div>
  )
}



const LeftPanel = () => {
  return (
    <div className="flex-col hidden gap-2 text-foreground bg-background md:flex h-screen">
      <div className="sticky top-0 p-2">
        <Button variant="ghost" className="justify-start w-full gap-2 px-2 text-left">
          <div className="flex items-center justify-center rounded-full w-7 h-7 bg-gray-300 dark:bg-gray-600">
            <LuBot className="w-4 h-4" />
          </div>
          <div className="overflow-hidden text-sm grow text-ellipsis whitespace-nowrap">ChatGPT</div>
          <LuPen className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto border-r-2">
        <LeftPanelItems />
        <LeftPanelItems />
        <LeftPanelItems />
        <LeftPanelItems />
      </div>
    </div>
  )
}

const LeftPanelItems = () => {
  return (
    <>
      <div className="grid gap-1 p-2 text-foreground dark:text-white">
        <div className="px-2 text-xs font-medium text-muted-foreground dark:text-gray-400">Today</div>
        <Link
          href="#"
          className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
          prefetch={false}
        >
          Airplane Turbulence: Sky&apos;s Rollercoaster
        </Link>
        <Link
          href="#"
          className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
          prefetch={false}
        >
          How to make a chat app with React
        </Link>
        <Link
          href="#"
          className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
          prefetch={false}
        >
          Cooking recipe for disaster
        </Link>
      </div>
      <div className="grid gap-1 p-2 text-foreground">
        <div className="px-2 text-xs font-medium text-muted-foreground">Yesterday</div>
        <Link
          href="#"
          className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
          prefetch={false}
        >
          Python functon for Fibonacci sequence
        </Link>
        <Link
          href="#"
          className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
          prefetch={false}
        >
          Five largest lakes in the world
        </Link>
        <Link
          href="#"
          className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
          prefetch={false}
        >
          Weather forecast in Seattle
        </Link>
        <Link
          href="#"
          className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
          prefetch={false}
        >
          Chicken or the egg?
        </Link>
        <Link
          href="#"
          className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
          prefetch={false}
        >
          Neural networks for dummies
        </Link>
      </div>
    </>
  )
}

