# today.do

## Table of Contents

- [today.do](#todaydo)
  - [Table of Contents](#table-of-contents)
  - [Development](#development)
    - [DevTools](#devtools)
    - [Front-end Framework](#front-end-framework)
    - [Back-end for Front-end](#back-end-for-front-end)
    - [Back-end](#back-end)
    - [Databases](#databases)
  - [SaaS](#saas)
    - [Authentication](#authentication)
    - [Email](#email)
    - [Payment](#payment)
  - [DevOps](#devops)
    - [Serverless](#serverless)
    - [Operating System](#operating-system)

## Development

### DevTools

| No. | Group     | Subgroup   | Technology                 | Maintainer             |
| --- | --------- | ---------- | -------------------------- | ---------------------- |
| 1   | Language  |            | [TypeScript][ts]           | [Microsoft][microsoft] |
| 2   | DevTools  | Linter     | [ESLint][eslint]           |                        |
| 3   | DevTools  | Formatter  | [Prettier][prettier]       |                        |
| 4   | DevTools  | Testing    | [Jest][jest]               |                        |
| 5   | Styling   | Utilities  | [TailwindCSS][tailwindcss] |                        |
| 6   | Styling   | Components | [DaisyUI][daisyui]         |                        |
| 7   | Framework | Mobile     | [Capacitor][capacitor]     | [Ionic][ionic]         |
| 8   | Framework | Desktop    | [Tauri][tauri]             |                        |

[⬆️ Back to Table of Contents](#table-of-contents)

### Front-end Framework

| No  | Framework            | Meta                      | Maintainer       |
| --- | -------------------- | ------------------------- | ---------------- |
| 1   | [Angular][angular]   | SSR                       | [Google][google] |
| 2   | [React][react]       | [Next.js][next.js]        | [Vercel][vercel] |
| 3   | [Svelte][svelte]     | [SvelteKit][svelte-kit]   | [Vercel][vercel] |
| 4   | [Solid.js][solid.js] | [SolidStart][solid-start] |                  |
| 5   | [Vue][vue]           | [Nuxt][nuxt]              |                  |

[⬆️ Back to Table of Contents](#table-of-contents)

### Back-end for Front-end

| Group     | Name                                  |
| --------- | ------------------------------------- |
| Framework | [Apollo][apollo] + [GraphQL][graphql] |
| Framework | [gRPC](https://grpc.io/)              |
| Framework | [tRPC](https://trpc.io/)              |
| ORM       | [Drizzle](https://orm.drizzle.team/)  |
| ORM       | [Prisma](https://www.prisma.io/)      |

[⬆️ Back to Table of Contents](#table-of-contents)

### Back-end

| Group     | Name                              |
| --------- | --------------------------------- |
| Framework | [Express](https://expressjs.com/) |
| Framework | [Fastify](https://fastify.dev/)   |
| Framework | [Hono](https://hono.dev/)         |
| Framework | [Nest.js](https://nestjs.com/)    |

[⬆️ Back to Table of Contents](#table-of-contents)

### Databases

| #   | Paradigm      | Technology                             | Open Source                 | Maintainer             | Language         | Recommended |
| --- | ------------- | -------------------------------------- | --------------------------- | ---------------------- | ---------------- | ----------- |
| 1   | Key-Value     | [Badger][hypermode-badger]             |                             | [Hypermode][hypermode] | Go               |             |
| 2   | Key-Value     | LevelDB                                | [GitHub][gh-leveldb]        | [Google][google]       | C++              |             |
| 3   | Key-Value     | [Memcached][memcached]                 | [GitHub][gh-memcached]      |                        | C                |             |
| 4   | Key-Value     | [Redis][redis]                         | [GitHub][gh-redis]          |                        | C                | Recommended |
| 5   | Key-Value     | [RocksDB][rocksdb]                     |                             | [Meta][meta]           |                  |             |
| 6   | Key-Value     | [Valkey][valkey]                       | [GitHub][gh-valkey]         |                        | C                |             |
| 7   | Documental    | [CouchDB][apache-couchdb]              | [GitHub][gh-apache-couchdb] | [Apache][apache]       | [Erlang][erlang] |             |
| 8   | Documental    | [Couchbase](https://www.couchbase.com) |                             |                        |                  |             |
| 9   | Documental    | [DynamoDB][aws-dynamodb]               |                             | [AWS][aws]             |                  |             |
| 10  | Documental    | [MongoDB][mongodb]                     | [GitHub][gh-mongodb]        |                        | C++              | Recommended |
| 11  | Documental    | [RethinkDB][rethinkdb]                 | [GitHub][gh-rethinkdb]      |                        | C++              |             |
| 12  | Relational    | [CockroachDB][cockroachdb]             | [GitHub][gh-cockroach]      |                        | [Go][go]         |             |
| 13  | Relational    | libSQL                                 |                             |                        |                  |             |
| 14  | Relational    | [MariaDB][mariadb]                     | [GitHub][gh-mariadb]        |                        | C++              |             |
| 15  | Relational    | MS SQL                                 |                             |                        |                  |             |
| 16  | Relational    | [MySQL][mysql]                         | [GitHub][gh-mysql]          |                        | C++              |             |
| 17  | Relational    | [PostgreSQL][postgresql]               | [GitHub][gh-postgresql]     |                        | C                | Recommended |
| 18  | Relational    | [SQLite][sqlite]                       | [GitHub][gh-sqlite]         |                        | C                |             |
| 19  | Wide Column   | [Cassandra][apache-cassandra]          |                             | [Apache][apache]       |                  |             |
| 20  | Wide Column   | [HBase][apache-hbase]                  |                             | [Apache][apache]       |                  |             |
| 21  | Graph         | [DGraph][dgraph]                       |                             | [Hypermode][hypermode] |                  |             |
| 22  | Graph         | [neo4j][neo4j]                         |                             |                        |                  |             |
| 23  | Search Engine | [ElasticSearch][elasticsearch]         |                             |                        |                  |             |
| 24  | Search Engine | [Solr][apache-solr]                    |                             | [Apache][apache]       |                  |             |
| 25  | Multi Model   | [Fauna][fauna]                         |                             |                        |                  |             |

[⬆️ Back to Table of Contents](#table-of-contents)

## SaaS

### Authentication

- Inspired By
  - [Auth0](https://auth0.com/)
  - [Auth.js](https://authjs.dev/)
  - [BetterAuth](https://www.better-auth.com/)
  - [Clerk](https://clerk.com/)
- Single Sign-on (SSO)
  - [Google](https://www.google.com/)
  - [Facebook](https://www.facebook.com/)
  - [X](https://www.x.com/)
- [OAuth](https://oauth.net/)

[⬆️ Back to Table of Contents](#table-of-contents)

### Email

| Supersector | Sector | Subsector | Technology             | Open Source            | Maintainer | Language | Recommended |
| ----------- | ------ | --------- | ---------------------- | ---------------------- | ---------- | -------- | ----------- |
| Application | SaaS   | Email     | [SendGrid][sendgrid]   | [GitHub][gh-sendgrid]  |            | [JS][js] | Recommended |
| Application | SaaS   | Email     | [Mailgun][mailgun]     | [GitHub][gh-mailgun]   |            | [Go][go] |             |
| Application | SaaS   | Email     | [Postmark][postmark]   | [GitHub][gh-postmark]  |            | [TS][ts] |             |
| Application | SaaS   | Email     | [MailChimp][mailchimp] | [GitHub][gh-mailchimp] |            | [JS][js] |             |
| Application | SaaS   | Email     | [Resend][resend]       | [GitHub][gh-resend]    |            | [TS][ts] |             |

[⬆️ Back to Table of Contents](#table-of-contents)

### Payment

| Supersector | Sector | Subsector | Technology                                     | Open Source            | Maintainer | Language | Recommended |
| ----------- | ------ | --------- | ---------------------------------------------- | ---------------------- | ---------- | -------- | ----------- |
| Application | SaaS   | Payment   | [Braintree][braintree]                         | [GitHub][gh-braintree] |            | [JS][js] |             |
| Application | SaaS   | Payment   | [Lemon Squeezy](https://www.lemonsqueezy.com/) |                        |            |          |             |
| Application | SaaS   | Payment   | [Klarna](https://www.klarna.com/)              |                        |            |          |             |
| Application | SaaS   | Payment   | [Paddle][paddle]                               | [GitHub][gh-paddle]    |            | [TS][ts] |             |
| Application | SaaS   | Payment   | [Paypal][paypal]                               | [GitHub][gh-paypal]    |            | [TS][ts] |             |
| Application | SaaS   | Payment   | [Square][square]                               | [GitHub][gh-square]    |            | [TS][ts] |             |
| Application | SaaS   | Payment   | [Stripe][stripe]                               | [GitHub][gh-stripe]    |            | [TS][ts] |             |

[⬆️ Back to Table of Contents](#table-of-contents)

## DevOps

### Serverless

| Supersector | Sector     | Subsector | Technology                               | Open Source           | Maintainer               | Language | Recommended |
| ----------- | ---------- | --------- | ---------------------------------------- | --------------------- | ------------------------ | -------- | ----------- |
| Application | Serverless |           | [Cloudflare Workers][cloudflare-workers] |                       | [Cloudflare][cloudflare] |          |             |
| Application | Serverless |           | [Deno Deploy][deno-deploy]               |                       |                          |          |             |
| Application | Serverless |           | [Fly][fly]                               | [GitHub][gh-superfly] | [Fly][fly]               |          |             |
| Application | Serverless |           | [Netlify][netlify]                       | [GitHub][gh-netlify]  | [Netlify][netlify]       |          |             |
| Application | Serverless |           | [Vercel][vercel]                         | [GitHub][gh-vercel]   | [Vercel][vercel]         |          | Recommended |

[⬆️ Back to Table of Contents](#table-of-contents)

### Operating System

| No. | Group   | Subgroup | Operating System             | Maintainer             |
| --- | ------- | -------- | ---------------------------- | ---------------------- |
| 1   | Desktop | Linux    | [Arch][arch]                 | Open Source            |
| 2   | Desktop | Linux    | [Debian][debian]             | Open Source            |
| 3   | Desktop | Linux    | [Fedora][fedora]             | Open Source            |
| 4   | Desktop | Linux    | [Mint][mint]                 | Open Source            |
| 5   | Desktop | Linux    | [Ubuntu][ubuntu]             | Open Source            |
| 6   | Desktop | Unix     | [macOS][apple-macos]         | [Apple][apple]         |
| 7   | Desktop |          | [Windows][microsoft-windows] | [Microsoft][microsoft] |
| 8   | Mobile  |          | [Android][android]           | [Google][google]       |
| 9   | Mobile  |          | [iOS][apple-ios]             | [Apple][apple]         |

[⬆️ Back to Table of Contents](#table-of-contents)

<!-- Company -->

[apache]: https://apache.org
[apple]: https://www.apple.com
[aws]: https://aws.amazon.com
[google]: https://www.google.com/
[microsoft]: https://www.microsoft.com/

<!-- Languages -->

[js]: https://www.javascript.com
[go]: https://go.dev
[ts]: https://www.typescriptlang.org

<!-- Dev Tools -->

[eslint]: https://eslint.org/
[jest]: https://jestjs.io/
[prettier]: https://prettier.io/

<!-- Front-end -->

[angular]: https://angular.dev/
[next.js]: https://nextjs.org/
[nuxt]: https://nuxt.com/
[react]: https://react.dev/
[solid.js]: https://www.solidjs.com/
[solid-start]: https://start.solidjs.com/
[svelte]: https://svelte.dev/
[svelte-kit]: https://svelte.dev/docs/kit/introduction
[vue]: https://vuejs.org/

<!-- Styling -->

[daisyui]: https://daisyui.com/
[tailwindcss]: https://tailwindcss.com/

<!-- Hybrid -->

[capacitor]: https://capacitorjs.com/
[ionic]: https://ionicframework.com/
[tauri]: https://v2.tauri.app/

<!-- Back-end -->

[apollo]: https://www.apollographql.com/
[graphql]: https://graphql.org/

<!-- Database -->

[apache-cassandra]: https://cassandra.apache.org
[apache-couchdb]: https://couchdb.apache.org
[apache-hbase]: https://hbase.apache.org
[apache-solr]: https://solr.apache.org
[aws-dynamodb]: https://aws.amazon.com/dynamodb/
[cockroachdb]: https://www.cockroachlabs.com
[dgraph]: https://dgraph.io
[elasticsearch]: https://www.elastic.co/elasticsearch
[erlang]: https://www.erlang.org
[fauna]: https://fauna.com
[hypermode]: https://hypermode.com/
[hypermode-badger]: https://docs.hypermode.com/badger/overview
[mariadb]: https://mariadb.org
[memcached]: https://memcached.org
[meta]: https://opensource.fb.com/
[mongodb]: https://www.mongodb.com
[mysql]: https://www.mysql.com
[neo4j]: https://neo4j.com
[postgresql]: https://postgresql.org
[redis]: https://redis.io
[rocksdb]: https://rocksdb.org/
[rethinkdb]: https://rethinkdb.com/
[sqlite]: https://www.sqlite.org
[valkey]: https://valkey.io

[gh-redis]: https://github.com/redis/redis
[gh-apache-couchdb]: https://github.com/apache/couchdb
[gh-memcached]: https://github.com/memcached/memcached
[gh-mongodb]: https://github.com/mongodb/mongo
[gh-postgresql]: https://github.com/postgres/postgres
[gh-valkey]: https://github.com/valkey-io/valkey
[gh-cockroach]: https://github.com/cockroachdb/cockroach
[gh-mysql]: https://github.com/mysql/mysql-server
[gh-sqlite]: https://github.com/sqlite/sqlite
[gh-mariadb]: https://github.com/MariaDB/server
[gh-rethinkdb]: https://github.com/rethinkdb
[gh-leveldb]: https://github.com/google/leveldb

<!-- Email -->

[sendgrid]: https://sendgrid.com
[mailgun]: https://www.mailgun.com
[postmark]: https://postmarkapp.com
[mailchimp]: https://mailchimp.com
[resend]: https://resend.com

[gh-mailgun]: https://github.com/mailgun
[gh-sendgrid]: https://github.com/sendgrid/sendgrid-nodejs
[gh-mailchimp]: https://github.com/mailchimp
[gh-resend]: https://github.com/resend
[gh-postmark]: https://github.com/ActiveCampaign/postmark.js

<!-- Payment -->

[braintree]: https://www.braintreepayments.com
[paddle]: https://www.paddle.com
[paypal]: https://developer.paypal.com
[square]: https://developer.squareup.com
[stripe]: https://stripe.com

[gh-braintree]: https://github.com/braintree/braintree-web
[gh-paddle]: https://github.com/PaddleHQ/paddle-node-sdk
[gh-paypal]: https://github.com/paypal/paypal-js
[gh-square]: https://github.com/square/web-sdk
[gh-stripe]: https://github.com/stripe/stripe-js

<!-- Serverless -->

[cloudflare]: https://cloudflare.com
[cloudflare-workers]: https://workers.cloudflare.com
[deno-deploy]: https://deno.com/deploy
[netlify]: https://netlify.com
[fly]: https://fly.io
[vercel]: https://vercel.com/

[gh-superfly]: https://github.com/superfly
[gh-netlify]: https://github.com/netlify
[gh-vercel]: https://github.com/vercel

<!-- Operating System -->

[android]: https://www.android.com/
[apple-ios]: https://www.apple.com/os/ios/
[apple-macos]: https://www.apple.com/os/macos/
[arch]: https://archlinux.org/
[debian]: https://www.debian.org/
[fedora]: https://www.fedoraproject.org/
[microsoft-windows]: https://www.microsoft.com/en-us/windows/
[mint]: https://linuxmint.com/
[ubuntu]: https://ubuntu.com/
