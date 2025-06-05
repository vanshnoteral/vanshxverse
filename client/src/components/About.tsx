import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function About() {
  const skills = [
    { icon: "fab fa-discord", name: "Discord.js & Bot Development", color: "text-indigo-500" },
    { icon: "fab fa-node-js", name: "Node.js & Express", color: "text-green-500" },
    { icon: "fas fa-shield-alt", name: "Antinuke & Security Systems", color: "text-red-500" },
    { icon: "fas fa-microphone", name: "RTC & Voice Features", color: "text-purple-500" },
  ];

  const socialConnections = [
    { 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      name: "Instagram", 
      url: "https://www.instagram.com/notreal_vansh?igsh=cjVxMjk3Nm1kZDMx", 
      color: "hover:text-pink-500" 
    },
    { 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      name: "YouTube", 
      url: "https://youtube.com/@vanshxd69?si=iRdL2UNfFO1vgBgZ", 
      color: "hover:text-red-500" 
    },
    { 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
      name: "Spotify", 
      url: "https://open.spotify.com/user/31tpetur2gqcp65guzunwynjjcaa?si=tN8F8BCMQ6acF1rAmLpc8w", 
      color: "hover:text-green-500" 
    },
  ];

  return (
    <>
      {/* Social Connections Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              My <span className="gradient-text">Connections</span>
            </h2>
            <div className="flex justify-center items-center gap-8">
              {socialConnections.map((connection, index) => (
                <a
                  key={index}
                  href={connection.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center space-y-3 transition-all duration-300 hover:scale-110 ${connection.color} group`}
                >
                  <div className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:shadow-lg">
                    {connection.icon}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {connection.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              I'm from the beautiful state of Uttarakhand and currently live in Dehradun, India. I'm the admin of Cryptora, a Discord multipurpose bot created by NPG that serves communities with comprehensive features and advanced capabilities.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              As the admin of Cryptora, I manage and maintain this powerful Discord bot designed to be a complete solution for server management, offering multipurpose functionality that makes Discord communities more engaging and well-organized. Living in Dehradun gives me the perfect environment to focus on managing and enhancing this bot's capabilities.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <i className={`${skill.icon} ${skill.color} text-xl`}></i>
                    <span className="text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
              alt="Futuristic anime aesthetic artwork"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}