// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          script: [
            // <script src="https://myawesome-lib.js"></script>
            //{ src: 'https://awesome-lib.js' }
            {
                src: "https://code.jquery.com/jquery-3.5.1.min.js",
                async: true,
                crossorigin: "anonymous"
            },
            {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
                async: true,
                crossorigin: "anonymous",
                integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            },
          ],
          link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            //{ rel: 'stylesheet', href: 'https://awesome-lib.css' }
          ],
          // please note that this is an area that is likely to change
          style: [
            // <style type="text/css">:root { color: red }</style>
            //{ children: ':root { color: red }', type: 'text/css' }
          ],
          noscript: [
            // <noscript>JavaScript is required</noscript>
            { children: 'JavaScript is required' }
          ]
        }
      }
})
