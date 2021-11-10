import {createParamDecorator, ExecutionContext} from "@nestjs/common"

export const Organization = createParamDecorator((data, ctx:ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return  req.organization
})
