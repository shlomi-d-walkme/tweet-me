import { Catch, HttpException, ArgumentsHost } from "@nestjs/common";
import { GqlExceptionFilter, GqlArgumentsHost  } from "@nestjs/graphql";


@Catch(Error)
export class CustomGqlExceptionFilter implements GqlExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    console.log(exception['response'].data);
    gqlHost.getContext()
    return exception;
  }
}