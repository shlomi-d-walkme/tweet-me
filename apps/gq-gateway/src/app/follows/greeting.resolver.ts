import { Query, Resolver } from "@nestjs/graphql";


@Resolver(of => String)
export class GreetingResolver {
    @Query(() => String)
    hello() {
        return 'Hello'
    }
}