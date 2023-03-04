'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import clsx from 'clsx'

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = ({ ...props }) => <TooltipPrimitive.Root {...props} />
Tooltip.displayName = TooltipPrimitive.Tooltip.displayName

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		className={clsx(
			'z-50 overflow-hidden rounded-md border border-gray-600 px-3 py-1.5 text-sm text-slate-700s bg-slate-800 text-slate-400',
			className
		)}
		{...props}
	/>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
