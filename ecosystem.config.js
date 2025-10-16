// module.exports = {
//     apps: [
//         {
//             name: "paws-friend",
//             script: "node_modules/.bin/next",
//             args: "start",
//             cwd: "/home/runner/pawsfriend/_work/paws-friend/paws-friend",
//             interpreter: "none",
//             env_production: {
//                 NODE_ENV: "production",
//                 PORT: 7000
//             },
//             instances: 1,
//             autorestart: true,
//             max_restarts: 5,
//             min_uptime: "10s",
//             max_memory_restart: "1G",
//             out_file: "./logs/out.log",
//             error_file: "./logs/error.log",
//             merge_logs: true,
//             time: true
//         }
//     ]
// };