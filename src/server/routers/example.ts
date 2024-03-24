import { z } from "zod";
import { procedure, router } from "../trpc";
import { NextRequest, NextResponse } from "next/server";

export const exampleRouter = router({
  getName: procedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
      })
    )
    .query((otps) => {
      console.log(otps.ctx.req);
      return {
        fullName: `${otps.input.firstName} ${otps.input.lastName}`,
      };
    }),

  //   createUser: procedure
  //     .input(
  //       z.object({
  //         firstName: z.string(),
  //         lastName: z.string(),
  //       })
  //     ).mutation
  // .mutation((req: NextRequest, res: NextResponse) => {
  //   res.send({ fullName: "Robiul Alam" });
  // }),
});

export type ExampleRouter = typeof exampleRouter;
