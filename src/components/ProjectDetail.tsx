
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectDetailProps {
  project?: {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    tools: string[];
    link?: string;
    downloadLink?: string;
  };
  onClose?: () => void;
  isOpen?: boolean;
}

const ProjectDetail = ({
  project,
  onClose,
  isOpen,
}: ProjectDetailProps) => {
  if (!project) {
    return null;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose?.()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background p-0">
        <DialogHeader className="p-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute left-4 top-4"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <DialogTitle className="text-2xl font-bold text-center mx-auto">
              {project.title}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="px-6">
          <motion.div
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, index) => (
              <Badge key={index} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>

          <Tabs defaultValue="overview" className="w-full mb-6">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
              <TabsTrigger value="findings">Findings</TabsTrigger>
              <TabsTrigger value="conclusion">Conclusion</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <div className="space-y-4">
                <h3 className="font-semibold">Objectives</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identify key customer segments based on purchasing behavior</li>
                  <li>Analyze seasonal trends in product categories</li>
                  <li>Determine factors influencing cart abandonment</li>
                  <li>Provide recommendations for improving conversion rates</li>
                </ul>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="methodology" className="mt-4">
              <p className="text-muted-foreground">Methodology content will go here.</p>
            </TabsContent>
            <TabsContent value="findings" className="mt-4">
              <p className="text-muted-foreground">Findings content will go here.</p>
            </TabsContent>
            <TabsContent value="conclusion" className="mt-4">
              <p className="text-muted-foreground">Conclusion content will go here.</p>
            </TabsContent>
          </Tabs>

          <Separator className="my-6" />

          <div className="flex flex-wrap gap-4 justify-center pb-6">
            <Button variant="outline" className="gap-2" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View Project
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <a href="#" download>
                <Download className="h-4 w-4" />
                Download Report
              </a>
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
