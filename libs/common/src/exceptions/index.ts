import { HttpException, HttpStatus } from '@nestjs/common';

export class BaseHttpException extends HttpException {
  constructor(
    message: string,
    errors: Record<string, any> = {},
    statusCode: HttpStatus,
  ) {
    const formattedErrors = [
      {
        code: statusCode,
        message,
        data: errors,
      },
    ];

    super(formattedErrors, statusCode);
  }
}

export class InternalServerErrorException extends BaseHttpException {
  constructor(
    message = 'InternalServerErrorException',
    errors: Record<string, any> = {},
  ) {
    super(message, errors, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class ConflictException extends BaseHttpException {
  constructor(message = 'ConflictException', errors: Record<string, any> = {}) {
    super(message, errors, HttpStatus.CONFLICT);
  }
}

export class BadRequestException extends BaseHttpException {
  constructor(
    message = 'BadRequestException',
    errors: Record<string, any> = {},
  ) {
    super(message, errors, HttpStatus.BAD_REQUEST);
  }
}

export class UnauthorizedException extends BaseHttpException {
  constructor(
    message = 'UnauthorizedException',
    errors: Record<string, any> = {},
  ) {
    super(message, errors, HttpStatus.UNAUTHORIZED);
  }
}

export class DatabaseValidationException extends BaseHttpException {
  constructor(
    message: string = 'Database validation error: Precondition failed',
    errors: Record<string, any> = {},
  ) {
    super(message, errors, HttpStatus.PRECONDITION_FAILED);
  }
}

export class NotFoundException extends BaseHttpException {
  constructor(
    message: string = 'Document not found',
    errors: Record<string, any> = {},
  ) {
    super(message, errors, HttpStatus.NOT_FOUND);
  }
}

export class ForbiddenException extends BaseHttpException {
  constructor(
    message: string = 'ForbiddenException',
    errors: Record<string, any> = {},
  ) {
    super(message, errors, HttpStatus.FORBIDDEN);
  }
}
