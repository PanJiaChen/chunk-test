# chunkhash-test

## Project setup

```bash
npm install
```
## Then cancel the code comment

In router.js

```diff
- // {
- //   path: "test",
- //   name: "test",
- //   component: () => import('./views/Test.vue')
- // },

+ {
+    path: "test",
+    name: "test",
+    component: () => import('./views/Test.vue')
+  },

```

## Finally

```bash
npm run build
```




