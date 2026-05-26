import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full rounded-full border border-outline-variant/30 bg-surface-container-high pl-10 pr-6 py-5 font-manrope text-base text-off-white placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
