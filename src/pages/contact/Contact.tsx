import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  const formSchema = z.object({
    email: z.string().min(2).max(50),
    message: z.string().min(2).max(500),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    fetch(
      `https://api.roisderien.fr/?email=${values.email}&message=${values.message}`
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  return (
    <div className="mx-auto border border-foreground p-4 lg:max-w-[50%]  sm:max-w-[80%] min-h-[500px] sm:rounded bg-white shadow-lg">
      <div>
        <h2 className="text-center text-xl font-bold">Contact</h2>
      </div>
      <Separator className="h-[1px] w-[80%] my-2 mx-auto bg-foreground" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Votre e-mail..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Votre message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Envoyer</Button>
        </form>
      </Form>
    </div>
  );
}
