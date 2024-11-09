import { ApiProperty } from "@nestjs/swagger";

export class SampleCreateRequest{
    @ApiProperty()
    public readonly name:string;
    constructor(){}
}