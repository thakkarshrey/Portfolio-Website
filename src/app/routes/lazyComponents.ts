import { lazy } from 'react'

// layouts
export const RootLayout = lazy(() => import('../../components/common/layouts/root-layout'))

export const Home = lazy(() => import('../../components/common/header'))
export const About = lazy(() => import('../../components/sections/about'))
export const Experience = lazy(() => import('../../components/sections/experience'))
export const Skills = lazy(() => import('../../components/sections/skills'))
export const Projects = lazy(() => import('../../components/sections/projects'))
export const Contact = lazy(() => import('../../components/sections/contact'))
