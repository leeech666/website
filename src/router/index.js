import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import a from '@/components/a'
import b from '@/components/b'
import c from '@/components/c'
import p11 from '@/components/1-1'
import p12 from '@/components/1-2'
import p21 from '@/components/2-1'
import p22 from '@/components/2-2'
import p26 from '@/components/2-6'
import p261 from '@/components/2-6-1'
import p262 from '@/components/2-6-2'
import p263 from '@/components/2-6-3'
import p264 from '@/components/2-6-4'
import p265 from '@/components/2-6-5'
import moreDetails from '@/components/moreDetails'
import readMore from '@/components/readMore+'

Vue.use(Router)

export default new Router({
  routes: [
        {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/readMore+',
      name: 'readMore+',
      component:readMore
    },
  { path: '/moreDetails',
    name: 'moreDetails',
    component: moreDetails
  },
    {path: '/a',
    name: 'a',
    component: a
  },
  {path: '/b',
  name: 'b',
  component: b
},
{path: '/c',
name: 'c',
component: c
},
  {path: '/1-1',
  name: '1-1',
  component: p11
},
{path: '/1-2',
name: '1-2',
component: p12
},
  {path: '/2-1',
  name: '2-1',
  component: p21
},
{path: '/2-2',
name: '2-2',
component: p22
},
{path: '/2-6-*',
name: '2-6',
component: p26,
children:[
  {
    path: '/2-6-1',
  component: p261
  },
        {
          path: '/2-6-2',
          component: p262
        },
        {
          path: '/2-6-3',
          component: p263
        },
      {
        path: '/2-6-4',
        component: p264
      },
      {
        path: '/2-6-5',
        component: p265
      },
      ]
},
{
  path: '/*',
  name: 'HelloWorld',
  component: HelloWorld
},
  ]
})
