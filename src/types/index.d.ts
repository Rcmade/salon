import { alertVariants } from "@/components/ui/alert";
import { VariantProps } from "class-variance-authority";
export type AlertVarientT = VariantProps<typeof alertVariants>["variant"];

export type PageProps = {
  params: { _id: string };
  searchParams: SearchParams;
};

export type SearchParams = {
  [key: string]: string | number | boolean;
};

export type Children = {
  children: React.ReactNode;
};
