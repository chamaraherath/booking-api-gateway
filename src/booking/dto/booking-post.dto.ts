import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { GatewayReference } from './element/gateway-ref.dto';

export class DeceasedDto {

    @ApiProperty()
    @IsString()
    deceasedPersonId: string;

    @ApiProperty()
    @IsString()
    authoriserPersonId: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    salesId: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    siteId: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    casket: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    coffin: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    coffinType: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    detailsAndRequests: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    funeralCompanyId: string;

    @ApiProperty({
        format: 'date',
        example: 'YYYY-MM-DDTHH:mm:ss.sssZ',
    })
    @IsOptional()
    functionOrCateringDateAndTime: Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    functionOrCateringRequested: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    funeralArranger: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    height: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    largeService: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    length: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    numberOfAttendees: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    overSized: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    payment: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    private: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    prePurchaseDetails: string;

    @ApiProperty({
        format: 'date',
        example: 'YYYY-MM-DD',
    })
    @IsOptional()
    serviceDate: Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    serviceToBePaidBy: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    serviceType: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    sizeOfCoffinOrCasket: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    status: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    transactionType: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    weight: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    width: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    serviceVenueType: string;

    @ApiProperty()
    @IsOptional()
    @IsInt()
    venueCompanyID: number;

    @ApiProperty()
    @IsOptional()
    @IsInt()
    serviceCelebrant: number;

}

export class BurialOrCRPlacementDto {

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    bucketOrBoxOfSand: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    buggy: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    canopy: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    extraMatting: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    hearseSelection: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    intermentDepth: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    intermentLocation: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    locationAndRightsHolderDetails: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    loweringBy: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    loweringDevice: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    newGraveSelection: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    numberOfChairs: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    numberOfShovelsOrSpades: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    paSystem: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    removeLedger: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    shellOrShoring: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    step: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    straps: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    umbrellas: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    urnMaterial: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    urnOrContainerSize: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    whiteSandfill: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    witnessBackfill: boolean;

}

export class ChapelDto {

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    animalsAttending: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    backLoad: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    balloonRelease: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    carryIn: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    conciergeAttendant: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    extraTime: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    keyboard: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    numberOfEasels: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    numberOfTables: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    parkingAttendant: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    removeCross: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    rslService: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    serviceRequirements: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    viewingInChapel: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    webcasting: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    chapelRequests: string;

}

export class CremationDto {

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    arrangeDoctorVerification: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    authorisingPersonToCollectCRs: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    bonePick: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    cremationServiceType: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    cremationType: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    customsLetter: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    earlyDelivery: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    interstateOrOverseas: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    medicalCertificateType: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    urgentCollection: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    urgentCremation: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    urnOrContainerType: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    witnessCremation: boolean;

}

export class CateringDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    cateringRequests: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    menu: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    numberOfFunctionAttendees: string;

}

export class AppointmentsDto {

    @ApiProperty({
        format: 'date',
        example: 'YYYY-MM-DDTHH:mm:ss.sssZ',
    })
    @IsNotEmpty()
    date: Date;

    @ApiProperty({
        format: 'date',
        example: 'YYYY-MM-DDTHH:mm:ss.sssZ',
    })
    @IsNotEmpty()
    startTime: Date;

    @ApiProperty({
        format: 'date',
        example: 'YYYY-MM-DDTHH:mm:ss.sssZ',
    })
    @IsNotEmpty()
    endTime: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    action: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    siteId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    resourceId: string;

}

export class BookingDto {

    @ApiProperty()
    @IsString()
    @IsOptional()
    id: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    bookingReference: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    bookingSaleId: string;

    @ApiProperty({
        format: 'date',
        example: 'YYYY-MM-DD',
    })
    @IsNotEmpty()
    date: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    status: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    siteId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    transactionTypeId: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    locationId: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    funeralCompanyId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    recordType: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    tmStatus: string;

    @ApiProperty({ type: () => DeceasedDto })
    deceased: DeceasedDto;

    @ApiProperty({ type: () => CateringDto })
    catering: CateringDto;

    @ApiProperty({ type: () => CremationDto })
    cremation: CremationDto;

    @ApiProperty({ type: () => ChapelDto })
    chapel: ChapelDto;

    @ApiProperty({ type: () => BurialOrCRPlacementDto })
    burialOrCRPlacement: BurialOrCRPlacementDto;

    @ValidateNested({ each: true })
    @ApiProperty({ type: () => [AppointmentsDto] })
    @Type(() => AppointmentsDto)
    appointments: AppointmentsDto[];

    requestReference: GatewayReference;

    orgId: string;

    createdBy: string;

    updatedBy: string;

}