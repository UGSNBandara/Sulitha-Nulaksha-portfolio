$base = "E:\PortFolio\Sulitha-Nulaksha-portfolio\src\app\projects"
$slugs = @("Car_Controller","Subway_Surfers","Agree_Detect","Ano_Notes","QuickRef","To_Doo")

foreach ($slug in $slugs) {
    $stub = "import ProjectDetailPage from '@/components/ProjectDetailPage';" + [System.Environment]::NewLine
    $stub += "import { getProjectDetail } from '@/data/projects';" + [System.Environment]::NewLine
    $stub += "" + [System.Environment]::NewLine
    $stub += "export default function Page() {" + [System.Environment]::NewLine
    $stub += "  const project = getProjectDetail('" + $slug + "')!;" + [System.Environment]::NewLine
    $stub += "  return <ProjectDetailPage project={project} />;" + [System.Environment]::NewLine
    $stub += "}" + [System.Environment]::NewLine

    [System.IO.File]::WriteAllText("$base\$slug\page.tsx", $stub, [System.Text.Encoding]::UTF8)
    Write-Host "Wrote: $slug"
}
Write-Host "All stubs written."
