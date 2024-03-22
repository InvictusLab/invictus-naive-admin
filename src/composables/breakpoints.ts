import type { Ref } from 'vue'

export interface Breakpoints {
  breakpoints: any
  isMobile: Ref<boolean>
  isPad: Ref<boolean>
  isDesktop: Ref<boolean>
}

export const breakpointsEnum = {
  xl: 1600,
  lg: 1199,
  md: 991,
  sm: 767,
  xs: 575
}

export const useQueryBreakpoints = (): Breakpoints => {
  const breakpoints = reactive(useBreakpoints(breakpointsEnum))

  // Mobile
  const isMobile = breakpoints.smaller('sm')
  // Pad
  const isPad = breakpoints.between('sm', 'md')
  // PC
  const isDesktop = breakpoints.greater('md')

  return {
    breakpoints,
    isMobile,
    isPad,
    isDesktop
  }
}
