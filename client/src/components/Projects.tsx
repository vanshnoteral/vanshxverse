import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Cryptora Discord Bot",
      description: "A Discord multipurpose bot created by NPG with advanced antinuke system that I admin and maintain, providing comprehensive server protection, moderation features, cryptocurrency tracking, price alerts, portfolio management, and real-time market data for Discord communities.",
      image: "https://cdn.discordapp.com/avatars/1324050005467730091/21e8412082ea668bd2d5b49e2619fb64.png?size=1024",
      tags: ["Discord.js", "Node.js", "JavaScript", "API Integration"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  const tagColors = {
    "Discord.js": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    JavaScript: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "API Integration": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card bg-card border-border shadow-xl overflow-hidden animate-on-scroll hover:shadow-2xl"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={tagColors[tag as keyof typeof tagColors] || "bg-secondary text-secondary-foreground"}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="text-primary-foreground"
                  >
                    <a href="https://discord.com/oauth2/authorize?client_id=1324050005467730091&permissions=8&integration_type=0&scope=applications.commands+bot" className="flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      <span>Add Bot</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}