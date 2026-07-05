#!/usr/bin/env bun

import { Command } from "commander";
import { runWakeup } from "./tui/wakeup";

const program = new Command();

program.name("harshitclaw-build").description("HarshitClaw cli").version("0.0.1");


program.command("wakeup").description("Show Banner and options cli or telegram mode").action(async()=>{
    await runWakeup()
});

await program.parseAsync(process.argv);