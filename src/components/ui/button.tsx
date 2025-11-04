import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 hover:shadow-xl hover:scale-105 rounded-xl",
        destructive: "bg-destructive text-destructive-foreground shadow-glow hover:bg-destructive/90 rounded-xl",
        outline: "border-2 border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-accent/50 hover:shadow-accent-glow rounded-xl",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-medium rounded-xl",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "bg-gradient-to-r from-neon-coral to-electric-teal text-black font-semibold shadow-glow hover:shadow-xl hover:scale-105 hover:from-neon-coral/90 hover:to-electric-teal/90 rounded-xl",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 py-2 rounded-lg",
        lg: "h-13 px-8 py-4 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
