// Re-export generated types (stable import path for wso-react)
export * from '../generated/types';

// Book listing enums dropped from OpenAPI (swagger used free-form strings)
export namespace BooktrakCreateBookListingParams {
  export enum ConditionEnum {
    Empty = '' as any,
    POOR = 'POOR' as any,
    FAIR = 'FAIR' as any,
    GOOD = 'GOOD' as any,
    VERYGOOD = 'VERY_GOOD' as any,
    LIKENEW = 'LIKE_NEW' as any,
    NEW = 'NEW' as any,
  }
  export enum ListingTypeEnum {
    Empty = '' as any,
    BUY = 'BUY' as any,
    SELL = 'SELL' as any,
  }
}

export namespace ModelsBookListing {
  export enum ConditionEnum {
    Empty = '' as any,
    POOR = 'POOR' as any,
    FAIR = 'FAIR' as any,
    GOOD = 'GOOD' as any,
    VERYGOOD = 'VERY_GOOD' as any,
    LIKENEW = 'LIKE_NEW' as any,
    NEW = 'NEW' as any,
  }
  export enum ListingTypeEnum {
    Empty = '' as any,
    BUY = 'BUY' as any,
    SELL = 'SELL' as any,
  }
}
