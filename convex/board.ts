import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
  },
});
