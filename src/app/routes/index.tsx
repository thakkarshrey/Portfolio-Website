import RootLayout from '../../components/common/layouts/root-layout'
import * as lazy from './lazyComponents'

export const routes = [
  {
    element: <RootLayout />,
    errorElement: <>Not found</>,
    children: [
      {
        path: '/',
        element: <lazy.Home />
      },
      {
        path: '/about',
        element: <lazy.About />
      },
      {
        path: '/experience',
        element: <lazy.Experience />
      },
      {
        path: '/skills',
        element: <lazy.Skills />
      },
      {
        path: '/projects',
        element: <lazy.Projects />
      },
      {
        path: '/contact',
        element: <lazy.Contact />
      }
    ]
  }
]
