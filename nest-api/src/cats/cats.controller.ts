import {
  All,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Res,
  Response,
} from '@nestjs/common';
import { Response as expressResponse } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

/* A decorator is a special kind of declaration
that can be attached to a class declaration, method,
accessor, property, or parameter */

//applying multiple decorators @f @g x evaluates to f(g(x))

@Controller('cats') // routes support limited regex
export class CatsController {
  // the CatsService dependency is *injected* through the constructor
  //
  // TS will declare and initialize catsService when we use the `private` keyword
  constructor(private catsService: CatsService) {}

  // Nest is made to support async methods
  @Get()
  async findAll(): Promise<any[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): string {
    console.log(params.id);
    return `This action returns cat #${params.id}\n`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    this.catsService.create(createCatDto); // Interesting that TS equates CreateCatDto and Cat
  }

  @Put(':id')
  update(
    @Res() res: expressResponse,
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): any {
    if (updateCatDto.new) {
      res.status(201).json({ message: 'New cat created' });
    } else {
      return res.status(204).send('you created kitty ');
    }
  }
  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }
  @Delete(':id')
  remove(@Param('id') id: string, @Response() res: expressResponse) {
    // return { message: 'You deleted the #' + id + ' cat!' };
    res.status(200).send('You deleted that kitty!');
  }
  // Fallback for all other HTTP methods
  @All()
  @HttpCode(404)
  anyOtherHttpRequest(): string {
    return 'You reached an unhandled HTTP method\n';
  }
}

/*
The request object represents the HTTP request and has properties for the request query string, parameters, HTTP headers, and body (read more here). In most cases, it's not necessary to grab these properties manually. We can use dedicated decorators instead, such as @Body() or @Query(), which are available out of the box. Below is a list of the provided decorators and the plain platform-specific objects they represent.

@Request(), @Req()
	req
@Response(), @Res()*
	res
@Next()
	next
@Session()
	req.session
@Param(key?: string)
	req.params / req.params[key]
@Body(key?: string)
	req.body / req.body[key]
@Query(key?: string)
	req.query / req.query[key]
@Headers(name?: string)
	req.headers / req.headers[name]
@Ip()
	req.ip
@HostParam()
	req.hosts

  * For compatibility with typings across underlying HTTP platforms (e.g., Express and Fastify), Nest provides @Res() and @Response() decorators. @Res() is simply an alias for @Response(). Both directly expose the underlying native platform response object interface. When using them, you should also import the typings for the underlying library (e.g., @types/express) to take full advantage. Note that when you inject either @Res() or @Response() in a method handler, you put Nest into Library-specific mode for that handler, and you become responsible for managing the response. When doing so, you must issue some kind of response by making a call on the response object (e.g., res.json(...) or res.send(...)), or the HTTP server will hang.
*/

/* Why shouldn't you use the express library API for things?

Though this approach works, and does in fact allow for more flexibility in some ways by providing full control of the response object (headers manipulation, library-specific features, and so on), it should be used with care. In general, the approach is much less clear and does have some disadvantages. The main disadvantage is that your code becomes platform-dependent (as underlying libraries may have different APIs on the response object), and harder to test (you'll have to mock the response object, etc.).

Also, in the example above, you lose compatibility with Nest features that depend on Nest standard response handling, such as Interceptors and @HttpCode() / @Header() decorators. To fix this, you can set the passthrough option to true, as follows:

*/
