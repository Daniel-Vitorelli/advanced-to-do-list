import Task from "@/components/Task";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Check, Trash, List, ListCheck, Plus, X, Sigma } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Home = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-background">
      <Card className="w-lg">
        <CardContent className="flex flex-col gap-4">
          <form className="flex gap-2">
            <Input placeholder="Add task" />
            <Button>
              <Plus />
              Add
            </Button>
          </form>
          <Separator />
          <div className="flex gap-1">
            <Badge className="cursor-pointer" variant="default">
              <List />
              All
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <X />
              Not finished
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <Check />
              Finished
            </Badge>
          </div>

          <div className="shadow">
            <Task />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-1 items-center">
              <ListCheck size={14} />
              <p className="sm">Finished Tasks (3/3)</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <Trash size={14} />
                  <p className="text-sm">Delete completed tasks</p>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to delete these 2 items?
                  </AlertDialogTitle>
                  <AlertDialogFooter className="flex justify-end gap-2 pt-4">
                    <AlertDialogAction className="py-1 px-4 h-min">Yes</AlertDialogAction>
                    <AlertDialogCancel className="py-1 px-4 h-min">
                      Cancel
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogHeader>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <Progress value={100 / 3} />
          <div className="flex gap-1 items-center self-end">
            <Sigma size={14} />
            <p className="text-sm">3 tasks in total</p>
          </div>
        </CardFooter>
        
      </Card>
    </main>
  );
};

export default Home;
