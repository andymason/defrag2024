import * as esbuild from "esbuild";
import path from "node:path";

const MAIN_FILE = path.join(__dirname, "src", "main.tsx");
const OUT_FOLDER = path.join(__dirname, "www");

async function build(): Promise<void> {
    const esbuildContext = await esbuild.context({
        entryPoints: [MAIN_FILE],
        bundle: true,
        sourcemap: true,
        outdir: OUT_FOLDER,
    });

    await esbuildContext.watch();

    const {host, port} = await esbuildContext.serve({
        servedir: OUT_FOLDER,
    })

    console.info(`Serving at http://${host}:${port}`);
}


build().catch((error): void => {
    console.error("Build error", error);
    process.exit(1);
});