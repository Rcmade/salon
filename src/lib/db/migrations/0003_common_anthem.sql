ALTER TYPE "OAuthScope" ADD VALUE 'email profile';--> statement-breakpoint
ALTER TYPE "OAuthScope" ADD VALUE 'project user profiles';--> statement-breakpoint
ALTER TABLE "oAuthProjectConfig" ALTER COLUMN "scope" SET DEFAULT 'email profile';