import { promises as fs } from "fs";
import path from "path";
import KitBrowser from "./components/KitBrowser";

export interface KitVariable {
  label: string;
  type: string;
  default: string | number;
}

export interface KitData {
  name: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  files: Record<string, string[]>;
  variables: Record<string, KitVariable>;
  variants: Record<string, { label: string; class: string }>;
  dependencies: string[];
  fileContents: Record<string, string>;
}

async function getKits(): Promise<KitData[]> {
  const kitsDir = path.join(process.cwd(), "..", "kits");
  const folders = await fs.readdir(kitsDir);
  const kits: KitData[] = [];

  for (const folder of folders) {
    const kitJsonPath = path.join(kitsDir, folder, "kit.json");
    try {
      const raw = await fs.readFile(kitJsonPath, "utf-8");
      const kit = JSON.parse(raw) as KitData;

      const fileContents: Record<string, string> = {};
      for (const [, files] of Object.entries(kit.files)) {
        for (const file of files) {
          const filePath = path.join(kitsDir, folder, file);
          try {
            const content = await fs.readFile(filePath, "utf-8");
            fileContents[file] = content;
          } catch {
            fileContents[file] = "// File not found";
          }
        }
      }
      kit.fileContents = fileContents;

      kits.push(kit);
    } catch {
      // skip folders without kit.json
    }
  }

  return kits;
}

export default async function Home() {
  const kits = await getKits();

  return (
    <main className="min-h-screen">
      <header className="border-b border-[var(--card-border)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[var(--accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm">
            V
          </div>
          <h1 className="text-lg font-semibold tracking-tight">
            WP Agency Vault
          </h1>
        </div>
        <span className="text-sm text-[var(--muted)]">
          {kits.length} kits available
        </span>
      </header>
      <KitBrowser kits={kits} />
    </main>
  );
}
