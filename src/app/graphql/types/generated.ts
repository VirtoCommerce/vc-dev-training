import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Date` scalar type represents a year, month and day in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  Date: { input: string; output: string; }
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: { input: string; output: string; }
  Decimal: { input: number; output: number; }
  DynamicPropertyValue: { input: string | number | boolean | null; output: string | number | boolean | null; }
  Long: { input: number; output: number; }
  ModuleSettingValue: { input: string | number | boolean | null; output: string | number | boolean | null; }
  OptionalDecimal: { input: number | undefined; output: number | undefined; }
  OptionalNullableDecimal: { input: number | null | undefined; output: number | null | undefined; }
  OptionalString: { input: string | undefined; output: string | undefined; }
  PropertyValue: { input: string | number | boolean | null; output: string | number | boolean | null; }
  /** The `Seconds` scalar type represents a period of time represented as the total number of seconds in range [-922337203685, 922337203685]. */
  Seconds: { input: number; output: number; }
}

export interface IAccountCreationResultType {
  __typename?: 'AccountCreationResultType';
  /** The errors that occurred during the operation. */
  errors?: Maybe<Array<Maybe<IRegistrationErrorType>>>;
  requireEmailVerification: Scalars['Boolean']['output'];
  succeeded: Scalars['Boolean']['output'];
}

export interface IActivateBackInStockSubscriptionCommandType {
  productId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}

export interface IAddAddressToFavoritesCommandType {
  addressId: Scalars['String']['input'];
}

export interface IAddQuoteAttachmentsCommandType {
  quoteId: Scalars['String']['input'];
  urls: Array<InputMaybe<Scalars['String']['input']>>;
}

export interface IAddQuoteItemsCommandType {
  newQuoteItems: Array<InputMaybe<IInputNewQuoteItemType>>;
  quoteId: Scalars['String']['input'];
}

export interface IApproveQuoteCommandType {
  quoteId: Scalars['String']['input'];
}

export interface IApproveQuoteResultType {
  __typename?: 'ApproveQuoteResultType';
  id: Scalars['String']['output'];
  orderId?: Maybe<Scalars['String']['output']>;
}

export interface IAsset {
  __typename?: 'Asset';
  /** Culture name */
  cultureName?: Maybe<Scalars['String']['output']>;
  /** The description of the asset. */
  description?: Maybe<Scalars['String']['output']>;
  /** The group of the asset. */
  group?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the asset. */
  id: Scalars['String']['output'];
  /** The MIME type of the asset. */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The name of the asset. */
  name?: Maybe<Scalars['String']['output']>;
  /** The relative URL of the asset. */
  relativeUrl?: Maybe<Scalars['String']['output']>;
  /** The size of the asset in bytes. */
  size: Scalars['Long']['output'];
  /** The type ID of the asset. */
  typeId: Scalars['String']['output'];
  /** The URL of the asset. */
  url: Scalars['String']['output'];
}

export interface IAuthorizePaymentResultType {
  __typename?: 'AuthorizePaymentResultType';
  errorMessage?: Maybe<Scalars['String']['output']>;
  isSuccess: Scalars['Boolean']['output'];
}

export interface IAvailabilityData {
  __typename?: 'AvailabilityData';
  /** Available quantity */
  availableQuantity: Scalars['Long']['output'];
  /** Inventories */
  inventories: Array<IInventoryInfo>;
  /** Is active */
  isActive: Scalars['Boolean']['output'];
  /** Is available */
  isAvailable: Scalars['Boolean']['output'];
  /** Is buyable */
  isBuyable: Scalars['Boolean']['output'];
  /** Is estimated */
  isEstimated: Scalars['Boolean']['output'];
  /** Is in stock */
  isInStock: Scalars['Boolean']['output'];
  /** Is track inventory */
  isTrackInventory: Scalars['Boolean']['output'];
}

/** A connection from an object to a list of objects of type `BackInStockSubscription`. */
export interface IBackInStockSubscriptionConnection {
  __typename?: 'BackInStockSubscriptionConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IBackInStockSubscriptionEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IBackInStockSubscriptionType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `BackInStockSubscription`. */
export interface IBackInStockSubscriptionEdge {
  __typename?: 'BackInStockSubscriptionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IBackInStockSubscriptionType>;
}

export interface IBackInStockSubscriptionType {
  __typename?: 'BackInStockSubscriptionType';
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  memberId?: Maybe<Scalars['String']['output']>;
  productCode?: Maybe<Scalars['String']['output']>;
  productId: Scalars['String']['output'];
  productName?: Maybe<Scalars['String']['output']>;
  storeId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
}

/** A connection from an object to a list of objects of type `Brand`. */
export interface IBrandConnection {
  __typename?: 'BrandConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IBrandEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IBrandType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `Brand`. */
export interface IBrandEdge {
  __typename?: 'BrandEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IBrandType>;
}

export interface IBrandType {
  __typename?: 'BrandType';
  bannerUrl?: Maybe<Scalars['String']['output']>;
  /** Brand property name. */
  brandPropertyName?: Maybe<Scalars['String']['output']>;
  /** Unlocalized brand name. */
  brandPropertyValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Indicates if the brand is featured. */
  featured?: Maybe<Scalars['Boolean']['output']>;
  /** Brand ID. */
  id: Scalars['String']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** Brand name. */
  name?: Maybe<Scalars['String']['output']>;
  permalink: Scalars['String']['output'];
}


export interface IBrandTypeDescriptionArgs {
  type?: InputMaybe<Scalars['String']['input']>;
}

export interface IBreadcrumb {
  __typename?: 'Breadcrumb';
  /** Id of item the breadcrumb calculated for */
  itemId: Scalars['String']['output'];
  /** Semantic URL keyword */
  semanticUrl?: Maybe<Scalars['String']['output']>;
  /** Full path from catalog */
  seoPath?: Maybe<Scalars['String']['output']>;
  /** Name of current breadcrumb */
  title: Scalars['String']['output'];
  /** Catalog, category or product */
  typeName: Scalars['String']['output'];
}

export interface IBulkCartType {
  __typename?: 'BulkCartType';
  /** Cart */
  cart?: Maybe<ICartType>;
  /** A set of errors in case the SKUs are invalid */
  errors?: Maybe<Array<Maybe<IValidationErrorType>>>;
}

export interface IBulkWishlistType {
  __typename?: 'BulkWishlistType';
  /** Wishlists */
  wishlists?: Maybe<Array<Maybe<IWishlistType>>>;
}

export interface ICancelQuoteCommandType {
  comment: Scalars['String']['input'];
  quoteId: Scalars['String']['input'];
}

export interface ICartAddressType {
  __typename?: 'CartAddressType';
  /** Address type */
  addressType?: Maybe<Scalars['Int']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** First name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Id */
  key?: Maybe<Scalars['String']['output']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']['output']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode: Scalars['String']['output'];
  /** Region id */
  regionId?: Maybe<Scalars['String']['output']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']['output']>;
  /** Zip */
  zip?: Maybe<Scalars['String']['output']>;
}

export interface ICartConfigurationItemFileType {
  __typename?: 'CartConfigurationItemFileType';
  /** MIME type of the file */
  contentType?: Maybe<Scalars['String']['output']>;
  /** Name of the file */
  name: Scalars['String']['output'];
  /** Size of the file */
  size: Scalars['Long']['output'];
  /** URL of the file */
  url: Scalars['String']['output'];
}

export interface ICartConfigurationItemType {
  __typename?: 'CartConfigurationItemType';
  /** Custom text for 'Text' configuration item section */
  customText?: Maybe<Scalars['String']['output']>;
  /** List of files for 'File' configuration item section */
  files?: Maybe<Array<Maybe<ICartConfigurationItemFileType>>>;
  /** Configuration item ID */
  id: Scalars['String']['output'];
  /** Configuration item name */
  name?: Maybe<Scalars['String']['output']>;
  /** Configuration item product ID */
  productId?: Maybe<Scalars['String']['output']>;
  /** Configuration item product quantity */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Configuration item section ID */
  sectionId: Scalars['String']['output'];
  /** Configuration item type. Possible values: 'Product', 'Text', 'File' */
  type: Scalars['String']['output'];
}

/** A connection from an object to a list of objects of type `Cart`. */
export interface ICartConnection {
  __typename?: 'CartConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ICartEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ICartType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `Cart`. */
export interface ICartEdge {
  __typename?: 'CartEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ICartType>;
}

/** A connection from an object to a list of objects of type `ProductPickupLocation`. */
export interface ICartPickupLocationConnection {
  __typename?: 'CartPickupLocationConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IProductPickupLocationEdge>>>;
  /** Filter facets */
  filter_facets: Array<IFilterFacet>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IProductPickupLocation>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** Range facets */
  range_facets: Array<IRangeFacet>;
  /** Term facets */
  term_facets: Array<ITermFacet>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

export interface ICartShipmentItemType {
  __typename?: 'CartShipmentItemType';
  lineItem?: Maybe<ILineItemType>;
  /** Quantity */
  quantity: Scalars['Int']['output'];
}

export interface ICartType {
  __typename?: 'CartType';
  /** Addresses */
  addresses: Array<ICartAddressType>;
  /** Available Gifts */
  availableGifts: Array<IGiftItemType>;
  /** Available payment methods */
  availablePaymentMethods: Array<IPaymentMethodType>;
  availableShippingMethods: Array<IShippingMethodType>;
  /** Shopping cart channel ID */
  channelId?: Maybe<Scalars['String']['output']>;
  /** Cart checkout ID */
  checkoutId: Scalars['String']['output'];
  /** Shopping cart text comment */
  comment?: Maybe<Scalars['String']['output']>;
  /** Coupons */
  coupons: Array<ICouponType>;
  /** Currency */
  currency: ICurrencyType;
  /** Shopping cart user ID */
  customerId: Scalars['String']['output'];
  /** Shopping cart user name */
  customerName?: Maybe<Scalars['String']['output']>;
  /** Total discount */
  discountTotal: IMoneyType;
  /** Total discount with tax */
  discountTotalWithTax: IMoneyType;
  /** Discounts */
  discounts: Array<IDiscountType>;
  /** Cart dynamic property values */
  dynamicProperties: Array<IDynamicPropertyValueType>;
  /** Total extended price */
  extendedPriceTotal: IMoneyType;
  /** Total extended price with tax */
  extendedPriceTotalWithTax: IMoneyType;
  /** Shopping cart fee */
  fee: IMoneyType;
  /** Total fee */
  feeTotal: IMoneyType;
  /** Total fee with tax */
  feeTotalWithTax: IMoneyType;
  /** Shopping cart fee with tax */
  feeWithTax: IMoneyType;
  /** Gifts */
  gifts: Array<IGiftItemType>;
  /** Total handling */
  handlingTotal: IMoneyType;
  /** Total handling with tax */
  handlingTotalWithTax: IMoneyType;
  /** Has physical products */
  hasPhysicalProducts?: Maybe<Scalars['Boolean']['output']>;
  /** Shopping cart ID */
  id: Scalars['String']['output'];
  /** Displays whether the shopping cart is anonymous */
  isAnonymous: Scalars['Boolean']['output'];
  /** Displays whether the shopping cart is recurring */
  isRecuring?: Maybe<Scalars['Boolean']['output']>;
  /** Items */
  items: Array<ILineItemType>;
  /** Item count */
  itemsCount: Scalars['Int']['output'];
  /** Quantity of items */
  itemsQuantity: Scalars['Int']['output'];
  /** Shopping cart name */
  name: Scalars['String']['output'];
  /** Shopping cart organization ID */
  organizationId?: Maybe<Scalars['String']['output']>;
  /** Shopping cart organization name */
  organizationName?: Maybe<Scalars['String']['output']>;
  /** Payment price */
  paymentPrice: IMoneyType;
  /** Payment price with tax */
  paymentPriceWithTax: IMoneyType;
  /** Total payment */
  paymentTotal: IMoneyType;
  /** Total payment with tax */
  paymentTotalWithTax: IMoneyType;
  /** Payments */
  payments: Array<IPaymentType>;
  /** Purchase order number */
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  /** Shipments */
  shipments: Array<IShipmentType>;
  /** Shipping price */
  shippingPrice: IMoneyType;
  /** Shipping price with tax */
  shippingPriceWithTax: IMoneyType;
  /** Total shipping */
  shippingTotal: IMoneyType;
  /** Total shipping with tax */
  shippingTotalWithTax: IMoneyType;
  /** Shopping cart status */
  status?: Maybe<Scalars['String']['output']>;
  /** Shopping cart store ID */
  storeId: Scalars['String']['output'];
  /** Shopping cart subtotal */
  subTotal: IMoneyType;
  /** Subtotal discount */
  subTotalDiscount: IMoneyType;
  /** Subtotal discount with tax */
  subTotalDiscountWithTax: IMoneyType;
  /** Subtotal with tax */
  subTotalWithTax: IMoneyType;
  /** Tax details */
  taxDetails: Array<ITaxDetailType>;
  /** Tax percentage */
  taxPercentRate: Scalars['Decimal']['output'];
  /** Total tax */
  taxTotal: IMoneyType;
  /** Shipping tax type */
  taxType: Scalars['String']['output'];
  /** Shopping cart total */
  total: IMoneyType;
  /** Shopping cart type */
  type?: Maybe<Scalars['String']['output']>;
  /** A set of errors in case the cart is invalid */
  validationErrors: Array<IValidationErrorType>;
  /** Shopping cart volumetric weight value */
  volumetricWeight?: Maybe<Scalars['Decimal']['output']>;
  /** A set of temporary warnings for a cart user */
  warnings: Array<IValidationErrorType>;
  /** Shopping cart weight value */
  weight?: Maybe<Scalars['Decimal']['output']>;
  /** Shopping cart weight unit value */
  weightUnit?: Maybe<Scalars['String']['output']>;
}


export interface ICartTypeValidationErrorsArgs {
  ruleSet?: InputMaybe<Scalars['String']['input']>;
}

export interface ICartWithListType {
  __typename?: 'CartWithListType';
  /** Shopping cart */
  cart?: Maybe<ICartType>;
  /** Saved list */
  list?: Maybe<ICartType>;
}

export interface ICatalogDiscountType {
  __typename?: 'CatalogDiscountType';
  /** Discount amount */
  amount: Scalars['Decimal']['output'];
  /** Discount amount with tax */
  amountWithTax: Scalars['Decimal']['output'];
  /** Coupon */
  coupon?: Maybe<Scalars['String']['output']>;
  /** Value of discount description */
  description?: Maybe<Scalars['String']['output']>;
  /** Discount amount in the specified currency */
  moneyAmount: IMoneyType;
  /** Discount amount with tax in the specified currency */
  moneyAmountWithTax: IMoneyType;
  promotion?: Maybe<IPromotion>;
  /** Value of promotion id */
  promotionId?: Maybe<Scalars['String']['output']>;
}

export interface ICategory {
  __typename?: 'Category';
  /** Breadcrumbs */
  breadcrumbs: Array<IBreadcrumb>;
  childCategories: Array<ICategory>;
  /** SKU of category. */
  code: Scalars['String']['output'];
  description?: Maybe<ICategoryDescriptionType>;
  descriptions: Array<ICategoryDescriptionType>;
  /** Have a parent */
  hasParent: Scalars['Boolean']['output'];
  /** Id of category. */
  id: Scalars['String']['output'];
  /** Images */
  images: Array<IImageType>;
  /** The category image. */
  imgSrc?: Maybe<Scalars['String']['output']>;
  /** Level in hierarchy */
  level: Scalars['Int']['output'];
  /** The name of the category. */
  name: Scalars['String']['output'];
  /** All parent categories ids relative to the requested catalog and concatenated with \ . E.g. (1/21/344) */
  outline?: Maybe<Scalars['String']['output']>;
  /** Outlines */
  outlines: Array<IOutlineType>;
  parent?: Maybe<ICategory>;
  /** Category path in to the requested catalog  (all parent categories names concatenated. E.g. (parent1/parent2)) */
  path?: Maybe<Scalars['String']['output']>;
  /** The category priority. */
  priority: Scalars['Int']['output'];
  properties: Array<IProperty>;
  /** Category relevance score */
  relevanceScore?: Maybe<Scalars['Float']['output']>;
  /** Request related SEO info */
  seoInfo: ISeoInfo;
  /** Request related slug for category */
  slug?: Maybe<Scalars['String']['output']>;
}


export interface ICategoryDescriptionArgs {
  type?: InputMaybe<Scalars['String']['input']>;
}


export interface ICategoryDescriptionsArgs {
  type?: InputMaybe<Scalars['String']['input']>;
}


export interface ICategoryPropertiesArgs {
  names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

/** A connection from an object to a list of objects of type `Category`. */
export interface ICategoryConnection {
  __typename?: 'CategoryConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ICategoryEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ICategory>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

export interface ICategoryDescriptionType {
  __typename?: 'CategoryDescriptionType';
  /** Description text. */
  content?: Maybe<Scalars['String']['output']>;
  /** Description type. */
  descriptionType?: Maybe<Scalars['String']['output']>;
  /** Description ID. */
  id: Scalars['String']['output'];
  /** Description language code. */
  languageCode?: Maybe<Scalars['String']['output']>;
}

/** An edge in a connection from an object to another object of type `Category`. */
export interface ICategoryEdge {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ICategory>;
}

export interface IChangeOrganizationLogoResultType {
  __typename?: 'ChangeOrganizationLogoResultType';
  errorMessage?: Maybe<Scalars['String']['output']>;
  isSuccess: Scalars['Boolean']['output'];
}

export interface IChangeQuoteCommentCommandType {
  comment: Scalars['String']['input'];
  quoteId: Scalars['String']['input'];
}

export interface IChangeQuoteItemQuantityCommandType {
  lineItemId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  quoteId: Scalars['String']['input'];
}

export interface IChildCategoriesQueryResponseType {
  __typename?: 'ChildCategoriesQueryResponseType';
  childCategories?: Maybe<Array<Maybe<ICategory>>>;
}

export interface ICommonVendor {
  __typename?: 'CommonVendor';
  /** Vendor ID */
  id: Scalars['String']['output'];
  /** Vendor name */
  name: Scalars['String']['output'];
  /** Vendor rating */
  rating?: Maybe<IRating>;
}

export interface IConfigurableProductOptionInput {
  /** Product ID */
  productId: Scalars['String']['input'];
  /** Quantity of product */
  quantity: Scalars['Int']['input'];
}

export interface IConfigurationItemsResponseType {
  __typename?: 'ConfigurationItemsResponseType';
  /** Configuration items for configurable product */
  configurationItems?: Maybe<Array<Maybe<ICartConfigurationItemType>>>;
}

export interface IConfigurationLineItemType {
  __typename?: 'ConfigurationLineItemType';
  /** Currency */
  currency?: Maybe<ICurrencyType>;
  /** Total discount amount */
  discountAmount?: Maybe<IMoneyType>;
  /** Extended price */
  extendedPrice?: Maybe<IMoneyType>;
  /** The unique identifier */
  id?: Maybe<Scalars['String']['output']>;
  /** List price */
  listPrice?: Maybe<IMoneyType>;
  product?: Maybe<IProduct>;
  /** The quantity of the option */
  quantity: Scalars['Int']['output'];
  /** Sale price */
  salePrice?: Maybe<IMoneyType>;
  /** The text of the Text-type option */
  text?: Maybe<Scalars['String']['output']>;
}

export interface IConfigurationQueryResponseType {
  __typename?: 'ConfigurationQueryResponseType';
  configurationSections?: Maybe<Array<Maybe<IConfigurationSectionType>>>;
}

export interface IConfigurationSectionInput {
  /** Custom text for 'Text' section */
  customText?: InputMaybe<Scalars['String']['input']>;
  /** List of file links for 'File' section */
  fileUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Configuration section option/product */
  option?: InputMaybe<IConfigurableProductOptionInput>;
  /** Configuration section ID */
  sectionId: Scalars['String']['input'];
  /** Configuration section type. Possible values: 'Product', 'Text', 'File' */
  type: Scalars['String']['input'];
}

export interface IConfigurationSectionType {
  __typename?: 'ConfigurationSectionType';
  /** Is custom text allowed for Text-type section */
  allowCustomText: Scalars['Boolean']['output'];
  /** Is predefined text options allowed for Text-type section */
  allowTextOptions: Scalars['Boolean']['output'];
  /** Configuration section description */
  description?: Maybe<Scalars['String']['output']>;
  /** Configuration section id */
  id: Scalars['String']['output'];
  /** Is configuration section required */
  isRequired: Scalars['Boolean']['output'];
  /** Configuration section name */
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<IConfigurationLineItemType>>>;
  /** Configuration section type. Possible values: 'Product', 'Text', 'File' */
  type: Scalars['String']['output'];
}

export interface IConfirmTaskCommandType {
  id: Scalars['String']['input'];
}

/** A connection from an object to a list of objects of type `Contact`. */
export interface IContactConnection {
  __typename?: 'ContactConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IContactEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IContactType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `Contact`. */
export interface IContactEdge {
  __typename?: 'ContactEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IContactType>;
}

export interface IContactType {
  __typename?: 'ContactType';
  about: Scalars['String']['output'];
  addresses?: Maybe<IMemberAddressConnection>;
  birthDate?: Maybe<Scalars['Date']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<IMemberAddressType>;
  defaultLanguage?: Maybe<Scalars['String']['output']>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<IMemberAddressType>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<IDynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']['output']>>;
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  groups: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  /** Member type */
  memberType: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  organizations?: Maybe<IOrganizationConnection>;
  organizationsIds: Array<Maybe<Scalars['String']['output']>>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']['output']>>;
  securityAccounts?: Maybe<Array<Maybe<IUserType>>>;
  /** Selected shipping address id. */
  selectedAddressId?: Maybe<Scalars['String']['output']>;
  /** Request related SEO info */
  seoInfo?: Maybe<ISeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String']['output'];
  /** Status */
  status?: Maybe<Scalars['String']['output']>;
}


export interface IContactTypeAddressesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}


export interface IContactTypeOrganizationsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchPhrase?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}


export interface IContactTypeSeoInfoArgs {
  cultureName: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}

/** A connection from an object to a list of objects of type `Contract`. */
export interface IContractConnection {
  __typename?: 'ContractConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IContractEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IContractType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `Contract`. */
export interface IContractEdge {
  __typename?: 'ContractEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IContractType>;
}

export interface IContractType {
  __typename?: 'ContractType';
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** Contract dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<IDynamicPropertyValueType>>>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  storeId?: Maybe<Scalars['String']['output']>;
  vendorId?: Maybe<Scalars['String']['output']>;
}

export interface ICountryRegionType {
  __typename?: 'CountryRegionType';
  /** Code of country region. For example 'AL'. */
  id: Scalars['String']['output'];
  /** Name of country region. For example 'Alabama'. */
  name: Scalars['String']['output'];
}

export interface ICountryType {
  __typename?: 'CountryType';
  /** Code of country. For example 'USA'. */
  id: Scalars['String']['output'];
  /** Name of country. For example 'United States of America'. */
  name: Scalars['String']['output'];
  /** Country regions. */
  regions: Array<ICountryRegionType>;
}

export interface ICouponType {
  __typename?: 'CouponType';
  /** Coupon code */
  code?: Maybe<Scalars['String']['output']>;
  /** Is coupon was applied successfully */
  isAppliedSuccessfully: Scalars['Boolean']['output'];
}

export interface ICreateCustomerReviewCommandType {
  entityId: Scalars['String']['input'];
  entityName: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  review: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  userName: Scalars['String']['input'];
}

export interface ICreateQuoteCommandType {
  cultureName: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface ICreateQuoteFromCartCommandType {
  cartId: Scalars['String']['input'];
  comment: Scalars['String']['input'];
}

export interface ICreateReviewCommandType {
  entityId: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  imageUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating: Scalars['Int']['input'];
  review: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}

export interface ICreateReviewResult {
  __typename?: 'CreateReviewResult';
  id?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
  /** A set of errors in case the review is invalid */
  validationErrors: Array<IReviewValidationErrorType>;
}

export interface ICurrencyType {
  __typename?: 'CurrencyType';
  /** Currency code may be used ISO 4217 */
  code: Scalars['String']['output'];
  /** Currency English name */
  cultureName: Scalars['String']['output'];
  /** Currency custom formatting */
  customFormatting?: Maybe<Scalars['String']['output']>;
  /** Currency English name */
  englishName: Scalars['String']['output'];
  /** Exchange rate */
  exchangeRate: Scalars['Decimal']['output'];
  /** Symbol */
  symbol: Scalars['String']['output'];
}

export interface ICustomIdentityResultType {
  __typename?: 'CustomIdentityResultType';
  /** The errors that occurred during the identity operation. */
  errors?: Maybe<Array<Maybe<IIdentityErrorInfoType>>>;
  succeeded: Scalars['Boolean']['output'];
}

/** A connection from an object to a list of objects of type `CustomerOrder`. */
export interface ICustomerOrderConnection {
  __typename?: 'CustomerOrderConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ICustomerOrderEdge>>>;
  /** Filter facets */
  filter_facets: Array<IFilterFacet>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ICustomerOrderType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** Range facets */
  range_facets: Array<IRangeFacet>;
  /** Term facets */
  term_facets: Array<ITermFacet>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `CustomerOrder`. */
export interface ICustomerOrderEdge {
  __typename?: 'CustomerOrderEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ICustomerOrderType>;
}

export interface ICustomerOrderType {
  __typename?: 'CustomerOrderType';
  addresses: Array<IOrderAddressType>;
  /** Available payment methods */
  availablePaymentMethods: Array<IOrderPaymentMethodType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  cancelledDate?: Maybe<Scalars['DateTime']['output']>;
  channelId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  coupons: Array<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  currency: ICurrencyType;
  customerId: Scalars['String']['output'];
  customerName?: Maybe<Scalars['String']['output']>;
  discountAmount: IMoneyType;
  discountTotal: IMoneyType;
  discountTotalWithTax: IMoneyType;
  discounts: Array<IOrderDiscountType>;
  /** Customer order dynamic property values */
  dynamicProperties: Array<IDynamicPropertyValueType>;
  employeeId?: Maybe<Scalars['String']['output']>;
  employeeName?: Maybe<Scalars['String']['output']>;
  fee: IMoneyType;
  feeTotal: IMoneyType;
  feeTotalWithTax: IMoneyType;
  feeWithTax: IMoneyType;
  id: Scalars['String']['output'];
  inPayments: Array<IPaymentInType>;
  isApproved: Scalars['Boolean']['output'];
  isCancelled: Scalars['Boolean']['output'];
  isPrototype: Scalars['Boolean']['output'];
  items: Array<IOrderLineItemType>;
  languageCode?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  number: Scalars['String']['output'];
  objectType: Scalars['String']['output'];
  operationType: Scalars['String']['output'];
  organizationId?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  outerId?: Maybe<Scalars['String']['output']>;
  parentOperationId?: Maybe<Scalars['String']['output']>;
  paymentDiscountTotal: IMoneyType;
  paymentDiscountTotalWithTax: IMoneyType;
  paymentSubTotal: IMoneyType;
  paymentSubTotalWithTax: IMoneyType;
  paymentTaxTotal: IMoneyType;
  paymentTotal: IMoneyType;
  paymentTotalWithTax: IMoneyType;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  shipments: Array<IOrderShipmentType>;
  shippingDiscountTotal: IMoneyType;
  shippingDiscountTotalWithTax: IMoneyType;
  shippingSubTotal: IMoneyType;
  shippingSubTotalWithTax: IMoneyType;
  shippingTaxTotal: IMoneyType;
  shippingTotal: IMoneyType;
  shippingTotalWithTax: IMoneyType;
  shoppingCartId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  statusDisplayValue?: Maybe<Scalars['String']['output']>;
  storeId: Scalars['String']['output'];
  storeName?: Maybe<Scalars['String']['output']>;
  subTotal: IMoneyType;
  subTotalDiscount: IMoneyType;
  subTotalDiscountWithTax: IMoneyType;
  subTotalTaxTotal: IMoneyType;
  subTotalWithTax: IMoneyType;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  subscriptionNumber?: Maybe<Scalars['String']['output']>;
  taxDetails: Array<IOrderTaxDetailType>;
  taxPercentRate: Scalars['Decimal']['output'];
  taxTotal: IMoneyType;
  taxType?: Maybe<Scalars['String']['output']>;
  total: IMoneyType;
}


export interface ICustomerOrderTypeInPaymentsArgs {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}

export interface ICustomerReview {
  __typename?: 'CustomerReview';
  createdDate: Scalars['DateTime']['output'];
  entityId: Scalars['String']['output'];
  entityName: Scalars['String']['output'];
  entityType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images?: Maybe<Array<Maybe<ICustomerReviewImage>>>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  rating: Scalars['Int']['output'];
  review: Scalars['String']['output'];
  reviewStatus?: Maybe<CustomerReviewStatus>;
  storeId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  userName: Scalars['String']['output'];
}

/** A connection from an object to a list of objects of type `CustomerReview`. */
export interface ICustomerReviewConnection {
  __typename?: 'CustomerReviewConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ICustomerReviewEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ICustomerReview>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `CustomerReview`. */
export interface ICustomerReviewEdge {
  __typename?: 'CustomerReviewEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ICustomerReview>;
}

export interface ICustomerReviewImage {
  __typename?: 'CustomerReviewImage';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
}

export enum CustomerReviewStatus {
  Approved = 'APPROVED',
  New = 'NEW',
  Rejected = 'REJECTED'
}

export interface IDeactivateBackInStockSubscriptionCommandType {
  productId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}

export interface IDeclineQuoteCommandType {
  quoteId: Scalars['String']['input'];
}

export interface IDeleteFileCommandType {
  id: Scalars['String']['input'];
}

export interface IDeleteQuoteAttachmentsCommandType {
  quoteId: Scalars['String']['input'];
  urls: Array<InputMaybe<Scalars['String']['input']>>;
}

export interface IDeleteSkyflowCardCommandType {
  /** Skyflow card id */
  skyflowId: Scalars['String']['input'];
  /** Store id */
  storeId: Scalars['String']['input'];
}

/** A connection from an object to a list of objects of type `DemoCustomerOrder`. */
export interface IDemoCustomerOrderConnection {
  __typename?: 'DemoCustomerOrderConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IDemoCustomerOrderEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IDemoCustomerOrderType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `DemoCustomerOrder`. */
export interface IDemoCustomerOrderEdge {
  __typename?: 'DemoCustomerOrderEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IDemoCustomerOrderType>;
}

export interface IDemoCustomerOrderType {
  __typename?: 'DemoCustomerOrderType';
  id: Scalars['String']['output'];
  isApproved: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
  storeId: Scalars['String']['output'];
}

export interface IDescriptionType {
  __typename?: 'DescriptionType';
  /** Description text. */
  content?: Maybe<Scalars['String']['output']>;
  /** Description ID. */
  id: Scalars['String']['output'];
  /** Description language code. */
  languageCode?: Maybe<Scalars['String']['output']>;
  /** Description type. */
  reviewType?: Maybe<Scalars['String']['output']>;
}

/** A connection from an object to a list of objects of type `DictionaryItem`. */
export interface IDictionaryItemConnection {
  __typename?: 'DictionaryItemConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IDictionaryItemEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IDictionaryItemType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `DictionaryItem`. */
export interface IDictionaryItemEdge {
  __typename?: 'DictionaryItemEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IDictionaryItemType>;
}

export interface IDictionaryItemType {
  __typename?: 'DictionaryItemType';
  /** Id */
  id: Scalars['String']['output'];
  /** Localized dictionary item value */
  label?: Maybe<Scalars['String']['output']>;
  /** Name */
  name: Scalars['String']['output'];
}

export interface IDiscountType {
  __typename?: 'DiscountType';
  /** Discount amount */
  amount: Scalars['Decimal']['output'];
  /** Discount amount with tax */
  amountWithTax: Scalars['Decimal']['output'];
  /** Coupon */
  coupon?: Maybe<Scalars['String']['output']>;
  /** Value of discount description */
  description?: Maybe<Scalars['String']['output']>;
  /** Discount amount in the specified currency */
  moneyAmount: IMoneyType;
  /** Discount amount with tax in the specified currency */
  moneyAmountWithTax: IMoneyType;
  /** Value of promotion id */
  promotionId?: Maybe<Scalars['String']['output']>;
}

export interface IDynamicContentItemType {
  __typename?: 'DynamicContentItemType';
  contentType: Scalars['String']['output'];
  description: Scalars['String']['output'];
  /** Dynamic content dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<IDynamicPropertyValueType>>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Int']['output'];
}


export interface IDynamicContentItemTypeDynamicPropertiesArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
}

/** A connection from an object to a list of objects of type `DynamicProperty`. */
export interface IDynamicPropertyConnection {
  __typename?: 'DynamicPropertyConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IDynamicPropertyEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IDynamicPropertyType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `DynamicProperty`. */
export interface IDynamicPropertyEdge {
  __typename?: 'DynamicPropertyEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IDynamicPropertyType>;
}

export interface IDynamicPropertyType {
  __typename?: 'DynamicPropertyType';
  dictionaryItems?: Maybe<IDictionaryItemConnection>;
  /** The order for the dynamic property to display */
  displayOrder?: Maybe<Scalars['Int']['output']>;
  /** Value type */
  dynamicPropertyValueType: DynamicPropertyValueTypes;
  /** Id */
  id: Scalars['String']['output'];
  /** Is dynamic property value an array */
  isArray: Scalars['Boolean']['output'];
  /** Is dynamic property value a dictionary */
  isDictionary: Scalars['Boolean']['output'];
  /** Is dynamic property value multilingual */
  isMultilingual: Scalars['Boolean']['output'];
  /** Is dynamic property value required */
  isRequired: Scalars['Boolean']['output'];
  /** Localized property name */
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Object type */
  objectType: Scalars['String']['output'];
}


export interface IDynamicPropertyTypeDictionaryItemsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}

export interface IDynamicPropertyValueType {
  __typename?: 'DynamicPropertyValueType';
  /** Associated dictionary item */
  dictionaryItem?: Maybe<IDictionaryItemType>;
  /** Associated dynamic property */
  dynamicProperty?: Maybe<IDynamicPropertyType>;
  /** Value type */
  dynamicPropertyValueType: DynamicPropertyValueTypes;
  /** Property name */
  name?: Maybe<Scalars['String']['output']>;
  /** Property value */
  value?: Maybe<Scalars['DynamicPropertyValue']['output']>;
  /** Value type */
  valueType: Scalars['String']['output'];
}

/** Dynamic property value type */
export enum DynamicPropertyValueTypes {
  Boolean = 'BOOLEAN',
  DateTime = 'DATE_TIME',
  Decimal = 'DECIMAL',
  Html = 'HTML',
  Image = 'IMAGE',
  Integer = 'INTEGER',
  LongText = 'LONG_TEXT',
  ShortText = 'SHORT_TEXT',
  Undefined = 'UNDEFINED'
}

export interface IErrorParameterType {
  __typename?: 'ErrorParameterType';
  /** key */
  key: Scalars['String']['output'];
  /** Value */
  value: Scalars['String']['output'];
}

export interface IEvaluateDynamicContentResultType {
  __typename?: 'EvaluateDynamicContentResultType';
  items?: Maybe<Array<Maybe<IDynamicContentItemType>>>;
  totalCount: Scalars['Int']['output'];
}

export interface IFacet {
  /** Three facet types: Terms, Range, and Filter */
  facetType: FacetTypes;
  /** Localized name of the facet. */
  label: Scalars['String']['output'];
  /** The key/name  of the facet. */
  name: Scalars['String']['output'];
  /** Display order of the facet. */
  order?: Maybe<Scalars['Int']['output']>;
}

export interface IFacetRangeType {
  __typename?: 'FacetRangeType';
  /** Amount of products for which the values in a field fall into the specified range */
  count: Scalars['Long']['output'];
  /** The range’s lower endpoint in number format */
  from?: Maybe<Scalars['Decimal']['output']>;
  /** The range’s lower endpoint in string format, empty string represents infinity */
  fromStr?: Maybe<Scalars['String']['output']>;
  /** The flag indicates that From exclusive */
  includeFrom: Scalars['Boolean']['output'];
  /** The flag indicates that To exclusive */
  includeTo: Scalars['Boolean']['output'];
  /** is selected state */
  isSelected: Scalars['Boolean']['output'];
  /** Localization label */
  label: Scalars['String']['output'];
  /** Maximum value among all values contained within the range */
  max: Scalars['Decimal']['output'];
  /** Minimum value among all values contained within the range */
  min: Scalars['Decimal']['output'];
  /** The range’s upper endpoint in number format */
  to?: Maybe<Scalars['Decimal']['output']>;
  /** The range’s upper endpoint in string format, empty string represents infinity */
  toStr?: Maybe<Scalars['String']['output']>;
  /** Sum of all values contained in the range */
  total: Scalars['Long']['output'];
}

export interface IFacetTermType {
  __typename?: 'FacetTermType';
  /** count */
  count: Scalars['Long']['output'];
  /** is selected state */
  isSelected: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  /** term */
  term: Scalars['String']['output'];
}

export enum FacetTypes {
  Filter = 'FILTER',
  Range = 'RANGE',
  Terms = 'TERMS'
}

export interface IFaviconType {
  __typename?: 'FaviconType';
  /** Href of the favicon */
  href?: Maybe<Scalars['String']['output']>;
  /** Rel of the favicon */
  rel?: Maybe<Scalars['String']['output']>;
  /** Sizes of the favicon */
  sizes?: Maybe<Scalars['String']['output']>;
  /** Type of the favicon */
  type?: Maybe<Scalars['String']['output']>;
}

export interface IFcmSettingsType {
  __typename?: 'FcmSettingsType';
  apiKey: Scalars['String']['output'];
  appId: Scalars['String']['output'];
  authDomain: Scalars['String']['output'];
  messagingSenderId: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  storageBucket: Scalars['String']['output'];
  vapidKey: Scalars['String']['output'];
}

export interface IFileUploadScopeOptionsType {
  __typename?: 'FileUploadScopeOptionsType';
  allowAnonymousUpload: Scalars['Boolean']['output'];
  allowedExtensions: Array<Maybe<Scalars['String']['output']>>;
  maxFileSize: Scalars['Long']['output'];
  scope: Scalars['String']['output'];
}

export interface IFilterFacet extends IFacet {
  __typename?: 'FilterFacet';
  /** The number of products matching the value specified in the filter facet expression */
  count: Scalars['Int']['output'];
  /** The three types of facets. Terms, Range, Filter */
  facetType: FacetTypes;
  /** Localized name of the facet. */
  label: Scalars['String']['output'];
  /** The key/name  of the facet. */
  name: Scalars['String']['output'];
  /** Display order of the facet. */
  order?: Maybe<Scalars['Int']['output']>;
}

export interface IFulfillmentCenterAddressType {
  __typename?: 'FulfillmentCenterAddressType';
  /** Address type */
  addressType?: Maybe<Scalars['Int']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']['output']>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** First name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Id */
  key?: Maybe<Scalars['String']['output']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']['output']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Region id */
  regionId?: Maybe<Scalars['String']['output']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']['output']>;
  /** Zip */
  zip?: Maybe<Scalars['String']['output']>;
}

/** A connection from an object to a list of objects of type `FulfillmentCenter`. */
export interface IFulfillmentCenterConnection {
  __typename?: 'FulfillmentCenterConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IFulfillmentCenterEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IFulfillmentCenterType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `FulfillmentCenter`. */
export interface IFulfillmentCenterEdge {
  __typename?: 'FulfillmentCenterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IFulfillmentCenterType>;
}

export interface IFulfillmentCenterType {
  __typename?: 'FulfillmentCenterType';
  /** Fulfillment Center address. */
  address?: Maybe<IFulfillmentCenterAddressType>;
  /** Fulfillment Center description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Fulfillment Center GEO location. */
  geoLocation?: Maybe<Scalars['String']['output']>;
  /** Fulfillment Center ID. */
  id: Scalars['String']['output'];
  /** Fulfillment Center name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Nearest Fulfillment Centers */
  nearest?: Maybe<Array<Maybe<IFulfillmentCenterType>>>;
  /** Fulfillment Center outerId. */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Fulfillment Center short description. */
  shortDescription?: Maybe<Scalars['String']['output']>;
}


export interface IFulfillmentCenterTypeNearestArgs {
  take?: InputMaybe<Scalars['Int']['input']>;
}

export interface IGetRecentlyBrowsedResponseType {
  __typename?: 'GetRecentlyBrowsedResponseType';
  products?: Maybe<Array<Maybe<IProduct>>>;
}

export interface IGetRecommendationsResponseType {
  __typename?: 'GetRecommendationsResponseType';
  products?: Maybe<Array<Maybe<IProduct>>>;
}

export interface IGiftItemType {
  __typename?: 'GiftItemType';
  /** Product category ID */
  categoryId?: Maybe<Scalars['String']['output']>;
  /** Artificial ID for this value object */
  id: Scalars['String']['output'];
  /** Value of reward image absolute URL */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Line item ID in case there is a gift in the cart. If there is no gift, it stays null */
  lineItemId?: Maybe<Scalars['String']['output']>;
  /** Measurement unit */
  measureUnit?: Maybe<Scalars['String']['output']>;
  /** Name of the reward */
  name: Scalars['String']['output'];
  product?: Maybe<IProduct>;
  /** Product ID */
  productId?: Maybe<Scalars['String']['output']>;
  /** Promotion ID */
  promotionId: Scalars['String']['output'];
  /** Number of gifts in the reward */
  quantity: Scalars['Int']['output'];
}

export interface IGraphQlSettingsType {
  __typename?: 'GraphQLSettingsType';
  /** Keep-alive message interval for GraphQL subscription */
  keepAliveInterval: Scalars['Seconds']['output'];
}

export interface IIdentityErrorInfoType {
  __typename?: 'IdentityErrorInfoType';
  /** Error code */
  code: Scalars['String']['output'];
  /** Error description */
  description?: Maybe<Scalars['String']['output']>;
  /** Error parameter */
  parameter?: Maybe<Scalars['String']['output']>;
}

export interface IIdentityErrorType {
  __typename?: 'IdentityErrorType';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
}

export interface IIdentityResultType {
  __typename?: 'IdentityResultType';
  /** The errors that occurred during the identity operation. */
  errors?: Maybe<Array<Maybe<IIdentityErrorType>>>;
  succeeded: Scalars['Boolean']['output'];
}

export interface IImageType {
  __typename?: 'ImageType';
  /** Culture name */
  cultureName?: Maybe<Scalars['String']['output']>;
  /** The description of the image */
  description?: Maybe<Scalars['String']['output']>;
  /** The group of the image */
  group?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the image */
  id: Scalars['String']['output'];
  /** The name of the image */
  name?: Maybe<Scalars['String']['output']>;
  /** The relative URL of the image */
  relativeUrl?: Maybe<Scalars['String']['output']>;
  /** Sort order */
  sortOrder: Scalars['Int']['output'];
  /** The URL of the image */
  url: Scalars['String']['output'];
}

export interface IInitializePaymentResultType {
  __typename?: 'InitializePaymentResultType';
  actionHtmlForm?: Maybe<Scalars['String']['output']>;
  actionRedirectUrl?: Maybe<Scalars['String']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  isSuccess: Scalars['Boolean']['output'];
  orderId?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  paymentActionType?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  paymentMethodCode?: Maybe<Scalars['String']['output']>;
  publicParameters?: Maybe<Array<Maybe<IKeyValueType>>>;
  storeId?: Maybe<Scalars['String']['output']>;
}

export interface IInputAddBulkItemsType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  /** Bulk cart items */
  cartItems: Array<InputMaybe<IInputNewBulkItemType>>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputAddCouponType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Coupon code */
  couponCode: Scalars['String']['input'];
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputAddFcmTokenType {
  token: Scalars['String']['input'];
}

export interface IInputAddGiftItemsType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** IDs of gift rewards to add to the cart */
  ids: Array<InputMaybe<Scalars['String']['input']>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputAddItemType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Comment */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Configurable product support. List of configurable product sections */
  configurationSections?: InputMaybe<Array<InputMaybe<IConfigurationSectionInput>>>;
  /** Create date. Optional, to manually control line item position in the cart if required. ISO-8601 format, for example: 2025-01-23T11:46:11Z */
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  /** Price */
  price?: InputMaybe<Scalars['Decimal']['input']>;
  /** Product ID */
  productId: Scalars['String']['input'];
  /** Quantity */
  quantity: Scalars['Int']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputAddItemsType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  /** Cart items */
  cartItems: Array<InputMaybe<IInputNewCartItemType>>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputAddOrUpdateCartAddressType {
  /** Address */
  address: IInputAddressType;
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputAddOrUpdateCartPaymentType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Payment */
  payment: IInputPaymentType;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputAddOrUpdateCartShipmentType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Shipment */
  shipment: IInputShipmentType;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputAddOrUpdateOrderPaymentType {
  /** Order ID */
  orderId: Scalars['String']['input'];
  /** Payment */
  payment: IInputOrderPaymentType;
}

export interface IInputAddPurchaseRequestSourceType {
  documentUrls: Array<Scalars['String']['input']>;
  purchaseRequestId: Scalars['String']['input'];
}

export interface IInputAddWishlistBulkItemType {
  /** Wish list ids */
  listIds: Array<InputMaybe<Scalars['String']['input']>>;
  /** Product id to add */
  productId: Scalars['String']['input'];
  /** Product quantity to add */
  quantity?: InputMaybe<Scalars['Int']['input']>;
}

export interface IInputAddWishlistItemType {
  /** Wish list id */
  listId: Scalars['String']['input'];
  /** Product id to add */
  productId: Scalars['String']['input'];
  /** Product quantity to add */
  quantity?: InputMaybe<Scalars['Int']['input']>;
}

export interface IInputAddWishlistItemsType {
  listId: Scalars['String']['input'];
  /** List items */
  listItems: Array<IInputNewWishlistItemType>;
}

export interface IInputAddressType {
  addressType?: InputMaybe<Scalars['Int']['input']>;
  /** City */
  city?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Country code */
  countryCode?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Country */
  countryName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Description */
  description?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Email */
  email?: InputMaybe<Scalars['OptionalString']['input']>;
  /** First name */
  firstName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** ID */
  id?: InputMaybe<Scalars['OptionalString']['input']>;
  /** ID */
  key?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Last name */
  lastName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Line1 */
  line1?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Line2 */
  line2?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Middle name */
  middleName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Name */
  name?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Company name */
  organization?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Outer ID */
  outerId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Phone */
  phone?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Postal code */
  postalCode?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Region ID */
  regionId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Region */
  regionName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Zip */
  zip?: InputMaybe<Scalars['OptionalString']['input']>;
}

export interface IInputApplicationUserLoginType {
  loginProvider: Scalars['String']['input'];
  providerKey: Scalars['String']['input'];
}

export interface IInputApproveCustomerOrderCommand {
  /** The ID of the customer order to be approved. */
  orderId: Scalars['String']['input'];
}

export interface IInputAssignPermissionScopeType {
  scope: Scalars['String']['input'];
  type: Scalars['String']['input'];
}

export interface IInputAssignPermissionType {
  assignedScopes?: InputMaybe<Array<InputMaybe<IInputAssignPermissionScopeType>>>;
  name: Scalars['String']['input'];
}

export interface IInputAssignRoleType {
  concurrencyStamp?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  permissions: Array<InputMaybe<IInputAssignPermissionType>>;
}

export interface IInputAuthorizePaymentType {
  /** Order Id */
  orderId?: InputMaybe<Scalars['String']['input']>;
  /** Input parameters */
  parameters?: InputMaybe<Array<InputMaybe<IInputKeyValueType>>>;
  /** Payment Id */
  paymentId: Scalars['String']['input'];
}

export interface IInputCartItemQuantityType {
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  /** New quantity */
  quantity: Scalars['Int']['input'];
}

export interface IInputChangeAllCartItemsSelectedType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputChangeCartConfiguredItemType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Configuration sections */
  configurationSections?: InputMaybe<Array<InputMaybe<IConfigurationSectionInput>>>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  /** Quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputChangeCartCurrencyType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Second cart currency */
  newCurrencyCode: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputChangeCartItemCommentType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Comment */
  comment: Scalars['String']['input'];
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputChangeCartItemPriceType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  /** Price */
  price: Scalars['Decimal']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputChangeCartItemQuantityType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  /** Quantity */
  quantity: Scalars['Int']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputChangeCartItemSelectedType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  /** Is item selected for checkout */
  selectedForCheckout: Scalars['Boolean']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputChangeCartItemsQuantityType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  /** Cart items */
  cartItems: Array<InputMaybe<IInputCartItemQuantityType>>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputChangeCartItemsSelectedType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** List of line item Ids */
  lineItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputChangeCommentType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Comment */
  comment?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputChangeOrderStatusType {
  /** Order ID */
  orderId: Scalars['String']['input'];
  /** Order status */
  status: Scalars['String']['input'];
}

export interface IInputChangeOrganizationContactRoleType {
  /** Role IDs or names to be assigned to the user */
  roleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** User identifier to be changed */
  userId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputChangeOrganizationLogoCommandType {
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
}

export interface IInputChangePasswordType {
  /** New password according with system security policy */
  newPassword: Scalars['String']['input'];
  /** Old user password */
  oldPassword: Scalars['String']['input'];
  /** User identifier */
  userId: Scalars['String']['input'];
}

export interface IInputChangePurchaseOrderNumber {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Purchase Order Number */
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputChangeWishlistType {
  /** Culture name */
  cultureName?: InputMaybe<Scalars['String']['input']>;
  /** List description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** List ID */
  listId: Scalars['String']['input'];
  /** New List name */
  listName?: InputMaybe<Scalars['String']['input']>;
  /** List scope (private or organization) */
  scope?: InputMaybe<Scalars['String']['input']>;
  /** Sharing key (URL argument) */
  sharingKey?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputClearCartType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputClearPaymentsType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputClearShipmentsType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputCloneWishlistType {
  /** Culture name */
  cultureName?: InputMaybe<Scalars['String']['input']>;
  /** Currency code */
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** List description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Source List ID */
  listId: Scalars['String']['input'];
  /** List name */
  listName?: InputMaybe<Scalars['String']['input']>;
  /** List scope (private or organization) */
  scope?: InputMaybe<Scalars['String']['input']>;
  /** Sharing key (URL argument) */
  sharingKey?: InputMaybe<Scalars['String']['input']>;
  /** Store ID */
  storeId: Scalars['String']['input'];
  /** Owner ID */
  userId: Scalars['String']['input'];
}

export interface IInputConfirmEmailType {
  /** Confirm email token */
  token: Scalars['String']['input'];
  /** User identifier */
  userId: Scalars['String']['input'];
}

export interface IInputCreateApplicationUserType {
  /** Username of the creator */
  createdBy?: InputMaybe<Scalars['String']['input']>;
  /** Date of user creation */
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** User Email */
  email: Scalars['String']['input'];
  /** User ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Can user be locked out */
  lockoutEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** End date of lockout */
  lockoutEnd?: InputMaybe<Scalars['DateTime']['input']>;
  /** External logins */
  logins?: InputMaybe<Array<InputMaybe<IInputApplicationUserLoginType>>>;
  /** Id of the associated Member */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /** User password (nullable, for external logins) */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Password expiration date */
  passwordExpired?: InputMaybe<Scalars['Boolean']['input']>;
  /** User phone number */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Is user phone number confirmed */
  phoneNumberConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  /** User photo URL */
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  /** List of user roles */
  roles?: InputMaybe<Array<InputMaybe<IInputAssignRoleType>>>;
  /** Associated Store Id */
  storeId?: InputMaybe<Scalars['String']['input']>;
  /** Is Two Factor Authentication enabled */
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** User name */
  userName: Scalars['String']['input'];
  /** User type (Manager, Customer) */
  userType: Scalars['String']['input'];
}

export interface IInputCreateCartFromWishlistType {
  /** Wishlist ID */
  listId: Scalars['String']['input'];
}

export interface IInputCreateConfiguredLineItemCommand {
  configurableProductId: Scalars['String']['input'];
  configurationSections?: InputMaybe<Array<InputMaybe<IConfigurationSectionInput>>>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputCreateContactType {
  about?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<InputMaybe<IInputMemberAddressType>>>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  defaultLanguage?: InputMaybe<Scalars['String']['input']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  memberType?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  selectedAddressId?: InputMaybe<Scalars['String']['input']>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputCreateOrderFromCartType {
  /** Cart ID */
  cartId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputCreateOrganizationType {
  addresses?: InputMaybe<Array<InputMaybe<IInputMemberAddressType>>>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputCreatePurchaseRequestFromDocumentsType {
  cultureName: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  documentUrls: Array<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputCreatePurchaseRequestType {
  cultureName: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputCreateUserType {
  /** Application user to create */
  applicationUser: IInputCreateApplicationUserType;
}

export interface IInputCreateWishlistType {
  /** Culture name */
  cultureName?: InputMaybe<Scalars['String']['input']>;
  /** Currency code */
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** List description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** List name */
  listName?: InputMaybe<Scalars['String']['input']>;
  /** List scope (private or organization) */
  scope?: InputMaybe<Scalars['String']['input']>;
  /** Sharing key (URL argument) */
  sharingKey?: InputMaybe<Scalars['String']['input']>;
  /** Store ID */
  storeId: Scalars['String']['input'];
  /** Owner ID */
  userId: Scalars['String']['input'];
}

export interface IInputDeleteContactType {
  contactId: Scalars['String']['input'];
}

export interface IInputDeleteFcmTokenType {
  token: Scalars['String']['input'];
}

export interface IInputDeleteMemberAddressType {
  addresses: Array<InputMaybe<IInputMemberAddressType>>;
  memberId: Scalars['String']['input'];
}

export interface IInputDeleteUserType {
  userNames: Array<InputMaybe<Scalars['String']['input']>>;
}

export interface IInputDynamicPropertyValueType {
  /** Culture name ("en-US") for multilingual property */
  cultureName?: InputMaybe<Scalars['String']['input']>;
  /** Dynamic property name */
  name: Scalars['String']['input'];
  /** Dynamic property value. ID must be passed for dictionary item */
  value?: InputMaybe<Scalars['DynamicPropertyValue']['input']>;
}

export interface IInputExtractDataFromPurchaseRequestSourcesType {
  purchaseRequestId: Scalars['String']['input'];
}

export interface IInputInitializePaymentType {
  /** Order Id */
  orderId?: InputMaybe<Scalars['String']['input']>;
  /** Payment Id */
  paymentId: Scalars['String']['input'];
}

export interface IInputInviteUserType {
  /** Customer order Id to be associated with this user. */
  customerOrderId?: InputMaybe<Scalars['String']['input']>;
  /** Emails which will receive invites */
  emails: Array<Scalars['String']['input']>;
  /** Optional message to include into email with instructions which invites persons will see */
  message?: InputMaybe<Scalars['String']['input']>;
  /** ID of organization where contact will be added for user */
  organizationId?: InputMaybe<Scalars['String']['input']>;
  /** Role IDs or names to be assigned to the invited user */
  roleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** ID of store which will send invites */
  storeId: Scalars['String']['input'];
  /** Optional URL suffix: you may provide here relative URL to your page which handle registration by invite */
  urlSuffix?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputKeyValueType {
  /** Dictionary key */
  key: Scalars['String']['input'];
  /** Dictionary value */
  value?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputLockUnlockOrganizationContactType {
  userId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputMarkPushMessageReadType {
  messageId: Scalars['String']['input'];
}

export interface IInputMarkPushMessageUnreadType {
  messageId: Scalars['String']['input'];
}

export interface IInputMemberAddressType {
  addressType?: InputMaybe<Scalars['Int']['input']>;
  /** City */
  city: Scalars['String']['input'];
  /** Country code */
  countryCode: Scalars['String']['input'];
  /** Country name */
  countryName?: InputMaybe<Scalars['String']['input']>;
  /** Description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** key */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Line1 */
  line1: Scalars['String']['input'];
  /** Line2 */
  line2?: InputMaybe<Scalars['String']['input']>;
  /** Middle name */
  middleName?: InputMaybe<Scalars['String']['input']>;
  /** Name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Company name */
  organization?: InputMaybe<Scalars['String']['input']>;
  /** Outer id */
  outerId?: InputMaybe<Scalars['String']['input']>;
  /** Phone */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Postal code */
  postalCode: Scalars['String']['input'];
  /** Region id */
  regionId?: InputMaybe<Scalars['String']['input']>;
  /** Region name */
  regionName?: InputMaybe<Scalars['String']['input']>;
  /** Zip */
  zip?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputMergeCartType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Delete second cart after merge */
  deleteAfterMerge?: InputMaybe<Scalars['Boolean']['input']>;
  /** Second cart Id */
  secondCartId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputMoveWishlistItemType {
  /** Destination List ID */
  destinationListId: Scalars['String']['input'];
  /** Line item ID to move */
  lineItemId: Scalars['String']['input'];
  /** Source List ID */
  listId: Scalars['String']['input'];
}

export interface IInputNewBulkItemType {
  /** Product SKU */
  productSku: Scalars['String']['input'];
  /** Product quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
}

export interface IInputNewCartItemType {
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  /** Product Id */
  productId: Scalars['String']['input'];
  /** Product quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
}

export interface IInputNewQuoteItemType {
  comment?: InputMaybe<Scalars['String']['input']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Decimal']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
}

export interface IInputNewWishlistItemType {
  /** Product Id */
  productId: Scalars['String']['input'];
  /** Product quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
}

export interface IInputOrderAddressType {
  addressType?: InputMaybe<Scalars['Int']['input']>;
  /** City */
  city?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Country code */
  countryCode?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Country name */
  countryName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Email */
  email?: InputMaybe<Scalars['OptionalString']['input']>;
  /** First name */
  firstName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** ID */
  id?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Id */
  key?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Last name */
  lastName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Line1 */
  line1?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Line2 */
  line2?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Middle name */
  middleName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Name */
  name?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Company name */
  organization?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Outer id */
  outerId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Phone */
  phone?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Postal code */
  postalCode?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Region id */
  regionId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Region name */
  regionName?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Zip */
  zip?: InputMaybe<Scalars['OptionalString']['input']>;
}

export interface IInputOrderPaymentType {
  amount?: InputMaybe<Scalars['OptionalDecimal']['input']>;
  billingAddress?: InputMaybe<IInputOrderAddressType>;
  /** Text comment */
  comment?: InputMaybe<Scalars['OptionalString']['input']>;
  currency?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Dynamic properties */
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  /** Payment ID */
  id?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Payment outer ID value */
  outerId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Payment gateway code value */
  paymentGatewayCode?: InputMaybe<Scalars['OptionalString']['input']>;
  price?: InputMaybe<Scalars['OptionalDecimal']['input']>;
  /** Payment vendor ID value */
  vendorId?: InputMaybe<Scalars['OptionalString']['input']>;
}

export interface IInputPaymentType {
  amount?: InputMaybe<Scalars['OptionalDecimal']['input']>;
  billingAddress?: InputMaybe<IInputAddressType>;
  /** Text comment */
  comment?: InputMaybe<Scalars['OptionalString']['input']>;
  currency?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Dynamic properties */
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  /** Payment ID */
  id?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Payment outer ID value */
  outerId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Payment gateway code value */
  paymentGatewayCode?: InputMaybe<Scalars['OptionalString']['input']>;
  price?: InputMaybe<Scalars['OptionalDecimal']['input']>;
  purpose?: InputMaybe<Scalars['OptionalString']['input']>;
  vendorId?: InputMaybe<Scalars['OptionalString']['input']>;
}

export interface IInputPersonalDataType {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputPostProcessPurchaseRequestSourcesType {
  purchaseRequestId: Scalars['String']['input'];
}

export interface IInputPushHistoricalEventType {
  eventType?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputQuoteAddressType {
  addressType?: InputMaybe<Scalars['Int']['input']>;
  city: Scalars['String']['input'];
  countryCode?: InputMaybe<Scalars['String']['input']>;
  countryName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Company name */
  organization?: InputMaybe<Scalars['String']['input']>;
  outerId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  regionId?: InputMaybe<Scalars['String']['input']>;
  regionName?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputRegisterAccountType {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}

export interface IInputRegisterByInvitationType {
  /** Customer order Id to be associated with this user. */
  customerOrderId?: InputMaybe<Scalars['String']['input']>;
  /** First name of person */
  firstName: Scalars['String']['input'];
  /** Last name of person */
  lastName: Scalars['String']['input'];
  /** Password */
  password: Scalars['String']['input'];
  /** Phone */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Invitation token */
  token: Scalars['String']['input'];
  /** ID of use created for invited email */
  userId: Scalars['String']['input'];
  /** Username */
  username: Scalars['String']['input'];
}

export interface IInputRegisterContactType {
  about?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<IInputMemberAddressType>;
  birthdate?: InputMaybe<Scalars['Date']['input']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  middleName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputRegisterOrganizationType {
  address?: InputMaybe<IInputMemberAddressType>;
  addresses?: InputMaybe<Array<InputMaybe<IInputMemberAddressType>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  name: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputRejectCustomerOrderCommand {
  /** The ID of the customer order to be rejected. */
  orderId: Scalars['String']['input'];
}

export interface IInputRejectGiftItemsType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Ids of gift lineItems to reject from cart */
  ids: Array<InputMaybe<Scalars['String']['input']>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputRemoveCartAddressType {
  /** Address Id */
  addressId: Scalars['String']['input'];
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputRemoveCartType {
  /** Cart Id */
  cartId: Scalars['String']['input'];
  /** User Id */
  userId: Scalars['String']['input'];
}

export interface IInputRemoveCouponType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  /** Coupon code */
  couponCode?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputRemoveItemType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputRemoveItemsType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Array of line item Id */
  lineItemIds: Array<InputMaybe<Scalars['String']['input']>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputRemoveMemberFromOrganizationType {
  contactId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputRemoveShipmentType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Shipment Id */
  shipmentId?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputRemoveWishlistItemType {
  /** Line item ID to remove */
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  /** List ID */
  listId: Scalars['String']['input'];
  /** Line item product ID to remove */
  productId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputRemoveWishlistItemsType {
  /** Line item IDs to remove */
  lineItemIds: Array<Scalars['String']['input']>;
  /** List ID */
  listId: Scalars['String']['input'];
}

export interface IInputRemoveWishlistType {
  /** List ID */
  listId: Scalars['String']['input'];
}

export interface IInputRequestRegistrationType {
  /** Creating contact's account */
  account: IInputRegisterAccountType;
  /** Creating contact */
  contact: IInputRegisterContactType;
  /** Notification language code */
  languageCode?: InputMaybe<Scalars['String']['input']>;
  /** company type */
  organization?: InputMaybe<IInputRegisterOrganizationType>;
  /** Store ID */
  storeId: Scalars['String']['input'];
}

export interface IInputResetPasswordByTokenType {
  /** New password according with system security policy */
  newPassword: Scalars['String']['input'];
  /** User password reset token */
  token: Scalars['String']['input'];
  /** User identifier */
  userId: Scalars['String']['input'];
}

export interface IInputSaveForLaterType {
  /** Source Cart ID */
  cartId: Scalars['String']['input'];
  /** Culture name */
  cultureName?: InputMaybe<Scalars['String']['input']>;
  /** Currency code */
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Line item IDs to save for later */
  lineItemIds: Array<InputMaybe<Scalars['String']['input']>>;
  /** Store ID */
  storeId: Scalars['String']['input'];
  /** Owner ID */
  userId: Scalars['String']['input'];
}

export interface IInputSaveSearchQueryType {
  query: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}

export interface IInputSendVerifyEmailType {
  email?: InputMaybe<Scalars['String']['input']>;
  /** Notification language code */
  languageCode?: InputMaybe<Scalars['String']['input']>;
  /** Store ID */
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputShipmentType {
  /** Text comment */
  comment?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Currency value */
  currency?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Delivery address */
  deliveryAddress?: InputMaybe<IInputAddressType>;
  /** Dynamic properties */
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  /** Fulfillment center iD */
  fulfillmentCenterId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Height value */
  height?: InputMaybe<Scalars['OptionalNullableDecimal']['input']>;
  /** Shipment ID */
  id?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Length value */
  length?: InputMaybe<Scalars['OptionalNullableDecimal']['input']>;
  /** Measurement unit value */
  measureUnit?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Pickup location Id when shipment is Pickup */
  pickupLocationId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Price value */
  price?: InputMaybe<Scalars['OptionalDecimal']['input']>;
  /** Shipping method code */
  shipmentMethodCode?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Shipping method option */
  shipmentMethodOption?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Vendor ID */
  vendorId?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Volumetric weight value */
  volumetricWeight?: InputMaybe<Scalars['OptionalNullableDecimal']['input']>;
  /** Weight value */
  weight?: InputMaybe<Scalars['OptionalNullableDecimal']['input']>;
  /** Weight unit value */
  weightUnit?: InputMaybe<Scalars['OptionalString']['input']>;
  /** Width value */
  width?: InputMaybe<Scalars['OptionalNullableDecimal']['input']>;
}

export interface IInputUpdateApplicationUserType {
  /** Failed login attempts for the current user */
  accessFailedCount?: InputMaybe<Scalars['Int']['input']>;
  /** User Email */
  email: Scalars['String']['input'];
  /** User ID */
  id: Scalars['String']['input'];
  /** Can user be locked out */
  lockoutEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** End date of lockout */
  lockoutEnd?: InputMaybe<Scalars['DateTime']['input']>;
  /** Id of the associated Member */
  memberId?: InputMaybe<Scalars['String']['input']>;
  /** Password Hash */
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  /** User phone number */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Is user phone number confirmed */
  phoneNumberConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  /** User photo URL */
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  /** List of user roles */
  roles?: InputMaybe<Array<InputMaybe<IInputAssignRoleType>>>;
  /** SecurityStamp */
  securityStamp: Scalars['String']['input'];
  /** Associated Store Id */
  storeId?: InputMaybe<Scalars['String']['input']>;
  /** Is Two Factor Authentication enabled */
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** User name */
  userName: Scalars['String']['input'];
  /** User type (Manager, Customer) */
  userType: Scalars['String']['input'];
}

export interface IInputUpdateCartDynamicPropertiesType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<IInputDynamicPropertyValueType>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputUpdateCartItemDynamicPropertiesType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<IInputDynamicPropertyValueType>>;
  /** Line item Id */
  lineItemId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputUpdateCartPaymentDynamicPropertiesType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<IInputDynamicPropertyValueType>>;
  /** Payment Id */
  paymentId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputUpdateCartQuantity {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<IInputUpdateCartQuantityItem>>>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputUpdateCartQuantityItem {
  /** Product ID */
  productId: Scalars['String']['input'];
  /** Quantity */
  quantity: Scalars['Int']['input'];
}

export interface IInputUpdateCartShipmentDynamicPropertiesType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<IInputDynamicPropertyValueType>>;
  /** Shipment Id */
  shipmentId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IInputUpdateContactType {
  about?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<InputMaybe<IInputMemberAddressType>>>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  defaultLanguage?: InputMaybe<Scalars['String']['input']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  memberType?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  selectedAddressId?: InputMaybe<Scalars['String']['input']>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputUpdateMemberAddressType {
  addresses: Array<InputMaybe<IInputMemberAddressType>>;
  memberId: Scalars['String']['input'];
}

export interface IInputUpdateMemberDynamicPropertiesType {
  dynamicProperties: Array<InputMaybe<IInputDynamicPropertyValueType>>;
  memberId: Scalars['String']['input'];
}

export interface IInputUpdateOrderDynamicPropertiesType {
  dynamicProperties: Array<InputMaybe<IInputDynamicPropertyValueType>>;
  orderId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputUpdateOrderItemDynamicPropertiesType {
  dynamicProperties: Array<InputMaybe<IInputDynamicPropertyValueType>>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputUpdateOrderPaymentDynamicPropertiesType {
  dynamicProperties: Array<InputMaybe<IInputDynamicPropertyValueType>>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputUpdateOrderShipmentDynamicPropertiesType {
  dynamicProperties: Array<InputMaybe<IInputDynamicPropertyValueType>>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  shipmentId?: InputMaybe<Scalars['String']['input']>;
}

export interface IInputUpdateOrganizationType {
  addresses?: InputMaybe<Array<InputMaybe<IInputMemberAddressType>>>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<IInputDynamicPropertyValueType>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: Scalars['String']['input'];
  memberType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface IInputUpdatePersonalDataType {
  personalData: IInputPersonalDataType;
}

export interface IInputUpdatePurchaseRequestByDocumentsType {
  documentUrls: Array<Scalars['String']['input']>;
  purchaseRequestId: Scalars['String']['input'];
}

export interface IInputUpdateRoleInnerType {
  /** Concurrency Stamp */
  concurrencyStamp?: InputMaybe<Scalars['String']['input']>;
  /** Role description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Role ID */
  id: Scalars['String']['input'];
  /** Role name */
  name: Scalars['String']['input'];
  /** List of Role permissions */
  permissions: Array<InputMaybe<IInputAssignPermissionType>>;
}

export interface IInputUpdateRoleType {
  /** Role to update */
  role: IInputUpdateRoleInnerType;
}

export interface IInputUpdateUserType {
  /** Application user to update */
  applicationUser: IInputUpdateApplicationUserType;
}

export interface IInputUpdateWishlistItemsType {
  /** Bulk wishlist items */
  items: Array<InputMaybe<IInputUpdateWishlistLineItemType>>;
  /** Wish list id */
  listId: Scalars['String']['input'];
}

export interface IInputUpdateWishlistLineItemType {
  /** Line Item Id to update */
  lineItemId: Scalars['String']['input'];
  /** Product quantity to add */
  quantity: Scalars['Int']['input'];
}

export interface IInventoryInfo {
  __typename?: 'InventoryInfo';
  /** Allow backorder */
  allowBackorder: Scalars['Boolean']['output'];
  /** Allow preorder */
  allowPreorder: Scalars['Boolean']['output'];
  /** Backorder availability date */
  backorderAvailabilityDate?: Maybe<Scalars['DateTime']['output']>;
  fulfillmentCenterId: Scalars['String']['output'];
  fulfillmentCenterName: Scalars['String']['output'];
  /** Inventory in stock quantity */
  inStockQuantity: Scalars['Long']['output'];
  /** Preorder availability date */
  preorderAvailabilityDate?: Maybe<Scalars['DateTime']['output']>;
  /** Inventory reserved quantity */
  reservedQuantity: Scalars['Long']['output'];
}

export interface IKeyValueType {
  __typename?: 'KeyValueType';
  /** Dictionary key */
  key: Scalars['String']['output'];
  /** Dictionary value */
  value?: Maybe<Scalars['String']['output']>;
}

export interface ILanguageType {
  __typename?: 'LanguageType';
  /** Culture name format (e.g. en-US) */
  cultureName: Scalars['String']['output'];
  /** Is invariant */
  isInvariant: Scalars['Boolean']['output'];
  /** Native name */
  nativeName: Scalars['String']['output'];
  /** ISO 639-2 three-letter code for the language. */
  threeLetterLanguageName: Scalars['String']['output'];
  /** Three-letter code defined in ISO 3166 for the country/region. */
  threeLetterRegionName: Scalars['String']['output'];
  /** ISO 639-1 two-letter code for the language. */
  twoLetterLanguageName: Scalars['String']['output'];
  /** Two-letter code defined in ISO 3166 for the country/region. */
  twoLetterRegionName: Scalars['String']['output'];
}

export interface ILineItemType {
  __typename?: 'LineItemType';
  /** Catalog ID value */
  catalogId: Scalars['String']['output'];
  /** Category ID value */
  categoryId?: Maybe<Scalars['String']['output']>;
  /** Configuration items for configurable product */
  configurationItems?: Maybe<Array<Maybe<ICartConfigurationItemType>>>;
  /** Line item create date */
  createdDate: Scalars['DateTime']['output'];
  /** Discount amount */
  discountAmount: IMoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: IMoneyType;
  /** Total discount */
  discountTotal: IMoneyType;
  /** Total discount with tax */
  discountTotalWithTax: IMoneyType;
  /** Discounts */
  discounts: Array<IDiscountType>;
  /** Cart line item dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<IDynamicPropertyValueType>>>;
  /** Extended price */
  extendedPrice: IMoneyType;
  /** Extended price with tax */
  extendedPriceWithTax: IMoneyType;
  /** Line item fulfillment center ID value */
  fulfillmentCenterId?: Maybe<Scalars['String']['output']>;
  /** Line item fulfillment center name value */
  fulfillmentCenterName?: Maybe<Scalars['String']['output']>;
  /** Height value */
  height?: Maybe<Scalars['Decimal']['output']>;
  /** Line item ID */
  id: Scalars['String']['output'];
  /** Value of line item image absolute URL */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** In stock quantity */
  inStockQuantity: Scalars['Int']['output'];
  /** flag of line item is a gift */
  isGift: Scalars['Boolean']['output'];
  /** Shows whether this is read-only */
  isReadOnly: Scalars['Boolean']['output'];
  /** Shows whether the line item is recurring */
  isReccuring: Scalars['Boolean']['output'];
  /** Shows whether this is valid */
  isValid: Scalars['Boolean']['output'];
  /** Culture name in the ISO 3166-1 alpha-3 format */
  languageCode?: Maybe<Scalars['String']['output']>;
  /** Length value */
  length?: Maybe<Scalars['Decimal']['output']>;
  /** List price */
  listPrice: IMoneyType;
  /** List price with tax */
  listPriceWithTax: IMoneyType;
  /** List total */
  listTotal: IMoneyType;
  /** List total with tax */
  listTotalWithTax: IMoneyType;
  /** Measurement unit value */
  measureUnit?: Maybe<Scalars['String']['output']>;
  /** Line item name value */
  name: Scalars['String']['output'];
  /** Line item comment */
  note?: Maybe<Scalars['String']['output']>;
  /** Line item quantity value */
  objectType: Scalars['String']['output'];
  /** Placed price */
  placedPrice: IMoneyType;
  /** Placed price with tax */
  placedPriceWithTax: IMoneyType;
  product?: Maybe<IProduct>;
  /** Product ID value */
  productId: Scalars['String']['output'];
  /** Product outer Id */
  productOuterId?: Maybe<Scalars['String']['output']>;
  /** Product type: Physical, Digital, or Subscription */
  productType?: Maybe<Scalars['String']['output']>;
  /** Line item quantity value */
  quantity: Scalars['Int']['output'];
  /** Requirement for line item shipping */
  requiredShipping: Scalars['Boolean']['output'];
  /** Sale price */
  salePrice: IMoneyType;
  /** Sale price with tax */
  salePriceWithTax: IMoneyType;
  /** Shows whether the line item is selected for buying */
  selectedForCheckout: Scalars['Boolean']['output'];
  /** Line item shipping method code value */
  shipmentMethodCode?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the PlacedPrice should be visible to the customer */
  showPlacedPrice: Scalars['Boolean']['output'];
  /** Product SKU value */
  sku: Scalars['String']['output'];
  /** Tax details */
  taxDetails: Array<ITaxDetailType>;
  /** Total shipping tax amount value */
  taxPercentRate: Scalars['Decimal']['output'];
  /** Tax total */
  taxTotal: IMoneyType;
  /** Shipping tax type value */
  taxType?: Maybe<Scalars['String']['output']>;
  /** Value of line item thumbnail image absolute URL */
  thumbnailImageUrl?: Maybe<Scalars['String']['output']>;
  /** Validation errors */
  validationErrors: Array<IValidationErrorType>;
  vendor?: Maybe<ICommonVendor>;
  /** Volumetric weight value */
  volumetricWeight?: Maybe<Scalars['Decimal']['output']>;
  /** Warehouse location */
  warehouseLocation?: Maybe<Scalars['String']['output']>;
  /** Shopping cart weight value */
  weight?: Maybe<Scalars['Decimal']['output']>;
  /** Weight unit value */
  weightUnit?: Maybe<Scalars['String']['output']>;
  /** Width value */
  width?: Maybe<Scalars['Decimal']['output']>;
}

export interface ILocalizedSettingResponseType {
  __typename?: 'LocalizedSettingResponseType';
  items?: Maybe<Array<Maybe<IKeyValueType>>>;
}

/** Represents the result of a loyalty balance operation. */
export interface ILoyaltyBalanceResult {
  __typename?: 'LoyaltyBalanceResult';
  /** The current balance of the loyalty account. */
  currentBalance: Scalars['Decimal']['output'];
  /** The resulting balance after applying the operation. */
  resultBalance: Scalars['Decimal']['output'];
}

/** Represents a log entry for a loyalty program operation. */
export interface ILoyaltyOperationLog {
  __typename?: 'LoyaltyOperationLog';
  /** The amount involved in the operation. */
  amount: Scalars['Decimal']['output'];
  /** The date and time when the log entry was created. */
  createdDate: Scalars['DateTime']['output'];
  /** The unique identifier of the log entry. */
  id: Scalars['String']['output'];
  object?: Maybe<ILoyaltyOperationLogObject>;
  /** The type of operation (e.g., Earned, Redeemed). */
  operationType: Scalars['String']['output'];
}

/** A connection from an object to a list of objects of type `LoyaltyOperationLog`. */
export interface ILoyaltyOperationLogConnection {
  __typename?: 'LoyaltyOperationLogConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ILoyaltyOperationLogEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ILoyaltyOperationLog>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `LoyaltyOperationLog`. */
export interface ILoyaltyOperationLogEdge {
  __typename?: 'LoyaltyOperationLogEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ILoyaltyOperationLog>;
}

/** Represents the object associated with a loyalty program operation log entry. */
export interface ILoyaltyOperationLogObject {
  __typename?: 'LoyaltyOperationLogObject';
  /** The identifier of the order associated with the operation, if applicable. */
  orderId?: Maybe<Scalars['String']['output']>;
  /** The number of the order associated with the operation, if applicable. */
  orderNumber?: Maybe<Scalars['String']['output']>;
  /** The type of the object associated with the operation. */
  type: Scalars['String']['output'];
}

/** A connection from an object to a list of objects of type `MemberAddress`. */
export interface IMemberAddressConnection {
  __typename?: 'MemberAddressConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IMemberAddressEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IMemberAddressType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `MemberAddress`. */
export interface IMemberAddressEdge {
  __typename?: 'MemberAddressEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IMemberAddressType>;
}

export interface IMemberAddressType {
  __typename?: 'MemberAddressType';
  addressType?: Maybe<Scalars['Int']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** First name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Is default address or not */
  isDefault: Scalars['Boolean']['output'];
  /** Is favorite address or not */
  isFavorite: Scalars['Boolean']['output'];
  /** Id */
  key?: Maybe<Scalars['String']['output']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']['output']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode: Scalars['String']['output'];
  /** Region id */
  regionId?: Maybe<Scalars['String']['output']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']['output']>;
  /** Zip */
  zip?: Maybe<Scalars['String']['output']>;
}

export interface IMemberType {
  __typename?: 'MemberType';
  addresses?: Maybe<IMemberAddressConnection>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<IMemberAddressType>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<IMemberAddressType>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<IDynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']['output']>>;
  groups: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  /** Member type */
  memberType: Scalars['String']['output'];
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']['output']>>;
  /** Request related SEO info */
  seoInfo?: Maybe<ISeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String']['output'];
  /** Status */
  status?: Maybe<Scalars['String']['output']>;
}


export interface IMemberTypeAddressesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}


export interface IMemberTypeSeoInfoArgs {
  cultureName: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}

export interface IMenuLinkListType {
  __typename?: 'MenuLinkListType';
  items: Array<IMenuLinkType>;
  /** Menu name */
  name: Scalars['String']['output'];
  /** Menu outer ID */
  outerId?: Maybe<Scalars['String']['output']>;
}

export interface IMenuLinkType {
  __typename?: 'MenuLinkType';
  /** Menu item object ID */
  associatedObjectId?: Maybe<Scalars['String']['output']>;
  /** Menu item object name */
  associatedObjectName?: Maybe<Scalars['String']['output']>;
  /** Menu item type name */
  associatedObjectType?: Maybe<Scalars['String']['output']>;
  childItems: Array<IMenuLinkType>;
  /** Menu item outerID */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Menu item priority */
  priority: Scalars['Int']['output'];
  /** Menu item title */
  title: Scalars['String']['output'];
  /** Menu item url */
  url: Scalars['String']['output'];
}

export interface IModuleSettingType {
  __typename?: 'ModuleSettingType';
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['ModuleSettingValue']['output']>;
}

export interface IModuleSettingsType {
  __typename?: 'ModuleSettingsType';
  moduleId: Scalars['String']['output'];
  settings: Array<IModuleSettingType>;
}

export interface IMoneyType {
  __typename?: 'MoneyType';
  /** A decimal with the amount rounded to the significant number of decimal digits. */
  amount: Scalars['Decimal']['output'];
  /** Currency type */
  currency: ICurrencyType;
  /** Number of decimal digits for the associated currency. */
  decimalDigits: Scalars['Int']['output'];
  /** Formatted amount. */
  formattedAmount: Scalars['String']['output'];
  /** Formatted amount without currency. */
  formattedAmountWithoutCurrency: Scalars['String']['output'];
  /** Formatted amount without point. */
  formattedAmountWithoutPoint: Scalars['String']['output'];
  /** Formatted amount without point and currency. */
  formattedAmountWithoutPointAndCurrency: Scalars['String']['output'];
}

export interface IMutations {
  __typename?: 'Mutations';
  activateBackInStockSubscription?: Maybe<IBackInStockSubscriptionType>;
  addAddressToFavorites?: Maybe<Scalars['Boolean']['output']>;
  addBulkItemsCart?: Maybe<IBulkCartType>;
  addCartAddress?: Maybe<ICartType>;
  addCoupon?: Maybe<ICartType>;
  addFcmToken?: Maybe<Scalars['Boolean']['output']>;
  addGiftItems?: Maybe<ICartType>;
  addItem?: Maybe<ICartType>;
  addItemsCart?: Maybe<ICartType>;
  addOrUpdateCartAddress?: Maybe<ICartType>;
  addOrUpdateCartPayment?: Maybe<ICartType>;
  addOrUpdateCartShipment?: Maybe<ICartType>;
  addOrUpdateOrderPayment?: Maybe<ICustomerOrderType>;
  addPurchaseRequestSource?: Maybe<IPurchaseRequestType>;
  addQuoteAttachments?: Maybe<IQuoteType>;
  addQuoteItems?: Maybe<IQuoteType>;
  addWishlistBulkItem?: Maybe<IBulkWishlistType>;
  addWishlistItem?: Maybe<IWishlistType>;
  addWishlistItems?: Maybe<IWishlistType>;
  approveOrder?: Maybe<IDemoCustomerOrderType>;
  approveQuoteRequest?: Maybe<IApproveQuoteResultType>;
  authorizePayment?: Maybe<IAuthorizePaymentResultType>;
  cancelQuoteRequest?: Maybe<IQuoteType>;
  changeCartConfiguredItem?: Maybe<ICartType>;
  changeCartCurrency?: Maybe<ICartType>;
  changeCartItemComment?: Maybe<ICartType>;
  changeCartItemPrice?: Maybe<ICartType>;
  changeCartItemQuantity?: Maybe<ICartType>;
  changeCartItemSelected?: Maybe<ICartType>;
  changeCartItemsQuantity?: Maybe<ICartType>;
  changeComment?: Maybe<ICartType>;
  changeOrderStatus?: Maybe<Scalars['Boolean']['output']>;
  changeOrganizationContactRole?: Maybe<ICustomIdentityResultType>;
  changeOrganizationLogo?: Maybe<IChangeOrganizationLogoResultType>;
  changePassword?: Maybe<ICustomIdentityResultType>;
  changePurchaseOrderNumber?: Maybe<ICartType>;
  changeQuoteComment?: Maybe<IQuoteType>;
  changeQuoteItemQuantity?: Maybe<IQuoteType>;
  changeWishlist?: Maybe<IWishlistType>;
  clearAllPushMessages?: Maybe<Scalars['Boolean']['output']>;
  clearCart?: Maybe<ICartType>;
  clearPayments?: Maybe<ICartType>;
  clearShipments?: Maybe<ICartType>;
  cloneWishlist?: Maybe<IWishlistType>;
  confirmEmail?: Maybe<ICustomIdentityResultType>;
  confirmTask?: Maybe<IWorkTaskType>;
  createCartFromWishlist?: Maybe<ICartType>;
  createConfiguredLineItem?: Maybe<IConfigurationLineItemType>;
  createContact?: Maybe<IContactType>;
  /** @deprecated Use createReview mutation instead. */
  createCustomerReview?: Maybe<ICustomerReview>;
  createOrderFromCart?: Maybe<ICustomerOrderType>;
  createOrganization?: Maybe<IOrganization>;
  createPurchaseRequest?: Maybe<IPurchaseRequestType>;
  createPurchaseRequestFromDocuments?: Maybe<IPurchaseRequestType>;
  createQuote?: Maybe<IQuoteType>;
  createQuoteFromCart?: Maybe<IQuoteType>;
  createReview?: Maybe<ICreateReviewResult>;
  createUser?: Maybe<IIdentityResultType>;
  createWishlist?: Maybe<IWishlistType>;
  deactivateBackInStockSubscription?: Maybe<IBackInStockSubscriptionType>;
  declineQuoteRequest?: Maybe<IQuoteType>;
  deleteContact?: Maybe<Scalars['Boolean']['output']>;
  deleteFcmToken?: Maybe<Scalars['Boolean']['output']>;
  deleteFile?: Maybe<Scalars['Boolean']['output']>;
  deleteMemberAddresses?: Maybe<IMemberType>;
  deleteQuoteAttachments?: Maybe<IQuoteType>;
  deleteSkyflowCard?: Maybe<Scalars['Boolean']['output']>;
  deleteUsers?: Maybe<IIdentityResultType>;
  extractPurchaseRequestSourcesData?: Maybe<IPurchaseRequestType>;
  initializePayment?: Maybe<IInitializePaymentResultType>;
  inviteUser?: Maybe<ICustomIdentityResultType>;
  lockOrganizationContact?: Maybe<IContactType>;
  markAllPushMessagesRead?: Maybe<Scalars['Boolean']['output']>;
  markAllPushMessagesUnread?: Maybe<Scalars['Boolean']['output']>;
  markPushMessageRead?: Maybe<Scalars['Boolean']['output']>;
  markPushMessageUnread?: Maybe<Scalars['Boolean']['output']>;
  mergeCart?: Maybe<ICartType>;
  moveFromSavedForLater?: Maybe<ICartWithListType>;
  moveToSavedForLater?: Maybe<ICartWithListType>;
  moveWishlistItem?: Maybe<IWishlistType>;
  postProcessPurchaseRequestSources?: Maybe<IPurchaseRequestType>;
  pushHistoricalEvent?: Maybe<Scalars['Boolean']['output']>;
  refreshCart?: Maybe<ICartType>;
  registerByInvitation?: Maybe<ICustomIdentityResultType>;
  rejectGiftItems?: Maybe<ICartType>;
  rejectOrder?: Maybe<IDemoCustomerOrderType>;
  rejectTask?: Maybe<IWorkTaskType>;
  removeAddressFromFavorites?: Maybe<Scalars['Boolean']['output']>;
  removeCart?: Maybe<Scalars['Boolean']['output']>;
  removeCartAddress?: Maybe<ICartType>;
  removeCartItem?: Maybe<ICartType>;
  removeCartItems?: Maybe<ICartType>;
  removeCoupon?: Maybe<ICartType>;
  removeMemberFromOrganization?: Maybe<IContactType>;
  removeQuoteItem?: Maybe<IQuoteType>;
  removeShipment?: Maybe<ICartType>;
  removeWishlist?: Maybe<Scalars['Boolean']['output']>;
  removeWishlistItem?: Maybe<IWishlistType>;
  removeWishlistItems?: Maybe<IWishlistType>;
  requestRegistration?: Maybe<IRequestRegistrationType>;
  resetPasswordByToken?: Maybe<ICustomIdentityResultType>;
  saveSearchQuery?: Maybe<Scalars['Boolean']['output']>;
  selectAllCartItems?: Maybe<ICartType>;
  selectCartItems?: Maybe<ICartType>;
  sendPasswordResetEmail?: Maybe<Scalars['Boolean']['output']>;
  sendVerifyEmail?: Maybe<Scalars['Boolean']['output']>;
  submitQuoteRequest?: Maybe<IQuoteType>;
  unSelectAllCartItems?: Maybe<ICartType>;
  unSelectCartItems?: Maybe<ICartType>;
  unlockOrganizationContact?: Maybe<IContactType>;
  updateCartDynamicProperties?: Maybe<ICartType>;
  updateCartItemDynamicProperties?: Maybe<ICartType>;
  updateCartPaymentDynamicProperties?: Maybe<ICartType>;
  updateCartQuantity?: Maybe<ICartType>;
  updateCartShipmentDynamicProperties?: Maybe<ICartType>;
  updateContact?: Maybe<IContactType>;
  updateMemberAddresses?: Maybe<IMemberType>;
  updateMemberDynamicProperties?: Maybe<IMemberType>;
  updateOrderDynamicProperties?: Maybe<ICustomerOrderType>;
  updateOrderItemDynamicProperties?: Maybe<ICustomerOrderType>;
  updateOrderPaymentDynamicProperties?: Maybe<ICustomerOrderType>;
  updateOrderShipmentDynamicProperties?: Maybe<ICustomerOrderType>;
  updateOrganization?: Maybe<IOrganization>;
  updatePersonalData?: Maybe<IIdentityResultType>;
  updatePurchaseRequestByDocuments?: Maybe<IPurchaseRequestType>;
  updateQuoteAddresses?: Maybe<IQuoteType>;
  updateQuoteAttachments?: Maybe<IQuoteType>;
  updateQuoteDynamicProperties?: Maybe<IQuoteType>;
  updateRole?: Maybe<IIdentityResultType>;
  updateUser?: Maybe<IIdentityResultType>;
  updateWishListItems?: Maybe<IWishlistType>;
}


export interface IMutationsActivateBackInStockSubscriptionArgs {
  command: IActivateBackInStockSubscriptionCommandType;
}


export interface IMutationsAddAddressToFavoritesArgs {
  command: IAddAddressToFavoritesCommandType;
}


export interface IMutationsAddBulkItemsCartArgs {
  command: IInputAddBulkItemsType;
}


export interface IMutationsAddCartAddressArgs {
  command: IInputAddOrUpdateCartAddressType;
}


export interface IMutationsAddCouponArgs {
  command: IInputAddCouponType;
}


export interface IMutationsAddFcmTokenArgs {
  command: IInputAddFcmTokenType;
}


export interface IMutationsAddGiftItemsArgs {
  command: IInputAddGiftItemsType;
}


export interface IMutationsAddItemArgs {
  command: IInputAddItemType;
}


export interface IMutationsAddItemsCartArgs {
  command: IInputAddItemsType;
}


export interface IMutationsAddOrUpdateCartAddressArgs {
  command: IInputAddOrUpdateCartAddressType;
}


export interface IMutationsAddOrUpdateCartPaymentArgs {
  command: IInputAddOrUpdateCartPaymentType;
}


export interface IMutationsAddOrUpdateCartShipmentArgs {
  command: IInputAddOrUpdateCartShipmentType;
}


export interface IMutationsAddOrUpdateOrderPaymentArgs {
  command: IInputAddOrUpdateOrderPaymentType;
}


export interface IMutationsAddPurchaseRequestSourceArgs {
  command: IInputAddPurchaseRequestSourceType;
}


export interface IMutationsAddQuoteAttachmentsArgs {
  command: IAddQuoteAttachmentsCommandType;
}


export interface IMutationsAddQuoteItemsArgs {
  command: IAddQuoteItemsCommandType;
}


export interface IMutationsAddWishlistBulkItemArgs {
  command: IInputAddWishlistBulkItemType;
}


export interface IMutationsAddWishlistItemArgs {
  command: IInputAddWishlistItemType;
}


export interface IMutationsAddWishlistItemsArgs {
  command: IInputAddWishlistItemsType;
}


export interface IMutationsApproveOrderArgs {
  command: IInputApproveCustomerOrderCommand;
}


export interface IMutationsApproveQuoteRequestArgs {
  command: IApproveQuoteCommandType;
}


export interface IMutationsAuthorizePaymentArgs {
  command: IInputAuthorizePaymentType;
}


export interface IMutationsCancelQuoteRequestArgs {
  command: ICancelQuoteCommandType;
}


export interface IMutationsChangeCartConfiguredItemArgs {
  command: IInputChangeCartConfiguredItemType;
}


export interface IMutationsChangeCartCurrencyArgs {
  command: IInputChangeCartCurrencyType;
}


export interface IMutationsChangeCartItemCommentArgs {
  command?: InputMaybe<IInputChangeCartItemCommentType>;
}


export interface IMutationsChangeCartItemPriceArgs {
  command: IInputChangeCartItemPriceType;
}


export interface IMutationsChangeCartItemQuantityArgs {
  command: IInputChangeCartItemQuantityType;
}


export interface IMutationsChangeCartItemSelectedArgs {
  command?: InputMaybe<IInputChangeCartItemSelectedType>;
}


export interface IMutationsChangeCartItemsQuantityArgs {
  command: IInputChangeCartItemsQuantityType;
}


export interface IMutationsChangeCommentArgs {
  command?: InputMaybe<IInputChangeCommentType>;
}


export interface IMutationsChangeOrderStatusArgs {
  command: IInputChangeOrderStatusType;
}


export interface IMutationsChangeOrganizationContactRoleArgs {
  command: IInputChangeOrganizationContactRoleType;
}


export interface IMutationsChangeOrganizationLogoArgs {
  command: IInputChangeOrganizationLogoCommandType;
}


export interface IMutationsChangePasswordArgs {
  command?: InputMaybe<IInputChangePasswordType>;
}


export interface IMutationsChangePurchaseOrderNumberArgs {
  command?: InputMaybe<IInputChangePurchaseOrderNumber>;
}


export interface IMutationsChangeQuoteCommentArgs {
  command: IChangeQuoteCommentCommandType;
}


export interface IMutationsChangeQuoteItemQuantityArgs {
  command: IChangeQuoteItemQuantityCommandType;
}


export interface IMutationsChangeWishlistArgs {
  command: IInputChangeWishlistType;
}


export interface IMutationsClearCartArgs {
  command: IInputClearCartType;
}


export interface IMutationsClearPaymentsArgs {
  command: IInputClearPaymentsType;
}


export interface IMutationsClearShipmentsArgs {
  command: IInputClearShipmentsType;
}


export interface IMutationsCloneWishlistArgs {
  command: IInputCloneWishlistType;
}


export interface IMutationsConfirmEmailArgs {
  command: IInputConfirmEmailType;
}


export interface IMutationsConfirmTaskArgs {
  command: IConfirmTaskCommandType;
}


export interface IMutationsCreateCartFromWishlistArgs {
  command: IInputCreateCartFromWishlistType;
}


export interface IMutationsCreateConfiguredLineItemArgs {
  command: IInputCreateConfiguredLineItemCommand;
}


export interface IMutationsCreateContactArgs {
  command: IInputCreateContactType;
}


export interface IMutationsCreateCustomerReviewArgs {
  command: ICreateCustomerReviewCommandType;
}


export interface IMutationsCreateOrderFromCartArgs {
  command: IInputCreateOrderFromCartType;
}


export interface IMutationsCreateOrganizationArgs {
  command: IInputCreateOrganizationType;
}


export interface IMutationsCreatePurchaseRequestArgs {
  command: IInputCreatePurchaseRequestType;
}


export interface IMutationsCreatePurchaseRequestFromDocumentsArgs {
  command: IInputCreatePurchaseRequestFromDocumentsType;
}


export interface IMutationsCreateQuoteArgs {
  command: ICreateQuoteCommandType;
}


export interface IMutationsCreateQuoteFromCartArgs {
  command: ICreateQuoteFromCartCommandType;
}


export interface IMutationsCreateReviewArgs {
  command: ICreateReviewCommandType;
}


export interface IMutationsCreateUserArgs {
  command: IInputCreateUserType;
}


export interface IMutationsCreateWishlistArgs {
  command: IInputCreateWishlistType;
}


export interface IMutationsDeactivateBackInStockSubscriptionArgs {
  command: IDeactivateBackInStockSubscriptionCommandType;
}


export interface IMutationsDeclineQuoteRequestArgs {
  command: IDeclineQuoteCommandType;
}


export interface IMutationsDeleteContactArgs {
  command: IInputDeleteContactType;
}


export interface IMutationsDeleteFcmTokenArgs {
  command: IInputDeleteFcmTokenType;
}


export interface IMutationsDeleteFileArgs {
  command: IDeleteFileCommandType;
}


export interface IMutationsDeleteMemberAddressesArgs {
  command: IInputDeleteMemberAddressType;
}


export interface IMutationsDeleteQuoteAttachmentsArgs {
  command: IDeleteQuoteAttachmentsCommandType;
}


export interface IMutationsDeleteSkyflowCardArgs {
  command: IDeleteSkyflowCardCommandType;
}


export interface IMutationsDeleteUsersArgs {
  command: IInputDeleteUserType;
}


export interface IMutationsExtractPurchaseRequestSourcesDataArgs {
  command: IInputExtractDataFromPurchaseRequestSourcesType;
}


export interface IMutationsInitializePaymentArgs {
  command: IInputInitializePaymentType;
}


export interface IMutationsInviteUserArgs {
  command: IInputInviteUserType;
}


export interface IMutationsLockOrganizationContactArgs {
  command: IInputLockUnlockOrganizationContactType;
}


export interface IMutationsMarkPushMessageReadArgs {
  command: IInputMarkPushMessageReadType;
}


export interface IMutationsMarkPushMessageUnreadArgs {
  command: IInputMarkPushMessageUnreadType;
}


export interface IMutationsMergeCartArgs {
  command: IInputMergeCartType;
}


export interface IMutationsMoveFromSavedForLaterArgs {
  command: IInputSaveForLaterType;
}


export interface IMutationsMoveToSavedForLaterArgs {
  command: IInputSaveForLaterType;
}


export interface IMutationsMoveWishlistItemArgs {
  command: IInputMoveWishlistItemType;
}


export interface IMutationsPostProcessPurchaseRequestSourcesArgs {
  command: IInputPostProcessPurchaseRequestSourcesType;
}


export interface IMutationsPushHistoricalEventArgs {
  command: IInputPushHistoricalEventType;
}


export interface IMutationsRefreshCartArgs {
  command: IRefreshCartType;
}


export interface IMutationsRegisterByInvitationArgs {
  command: IInputRegisterByInvitationType;
}


export interface IMutationsRejectGiftItemsArgs {
  command: IInputRejectGiftItemsType;
}


export interface IMutationsRejectOrderArgs {
  command: IInputRejectCustomerOrderCommand;
}


export interface IMutationsRejectTaskArgs {
  command: IRejectTaskCommandType;
}


export interface IMutationsRemoveAddressFromFavoritesArgs {
  command: IRemoveAddressFromFavoritesCommandType;
}


export interface IMutationsRemoveCartArgs {
  command: IInputRemoveCartType;
}


export interface IMutationsRemoveCartAddressArgs {
  command: IInputRemoveCartAddressType;
}


export interface IMutationsRemoveCartItemArgs {
  command: IInputRemoveItemType;
}


export interface IMutationsRemoveCartItemsArgs {
  command: IInputRemoveItemsType;
}


export interface IMutationsRemoveCouponArgs {
  command: IInputRemoveCouponType;
}


export interface IMutationsRemoveMemberFromOrganizationArgs {
  command: IInputRemoveMemberFromOrganizationType;
}


export interface IMutationsRemoveQuoteItemArgs {
  command: IRemoveQuoteItemCommandType;
}


export interface IMutationsRemoveShipmentArgs {
  command: IInputRemoveShipmentType;
}


export interface IMutationsRemoveWishlistArgs {
  command: IInputRemoveWishlistType;
}


export interface IMutationsRemoveWishlistItemArgs {
  command: IInputRemoveWishlistItemType;
}


export interface IMutationsRemoveWishlistItemsArgs {
  command: IInputRemoveWishlistItemsType;
}


export interface IMutationsRequestRegistrationArgs {
  command: IInputRequestRegistrationType;
}


export interface IMutationsResetPasswordByTokenArgs {
  command?: InputMaybe<IInputResetPasswordByTokenType>;
}


export interface IMutationsSaveSearchQueryArgs {
  command: IInputSaveSearchQueryType;
}


export interface IMutationsSelectAllCartItemsArgs {
  command?: InputMaybe<IInputChangeAllCartItemsSelectedType>;
}


export interface IMutationsSelectCartItemsArgs {
  command?: InputMaybe<IInputChangeCartItemsSelectedType>;
}


export interface IMutationsSendPasswordResetEmailArgs {
  command: ISendPasswordResetEmailCommandType;
}


export interface IMutationsSendVerifyEmailArgs {
  command?: InputMaybe<IInputSendVerifyEmailType>;
}


export interface IMutationsSubmitQuoteRequestArgs {
  command: ISubmitQuoteCommandType;
}


export interface IMutationsUnSelectAllCartItemsArgs {
  command?: InputMaybe<IInputChangeAllCartItemsSelectedType>;
}


export interface IMutationsUnSelectCartItemsArgs {
  command?: InputMaybe<IInputChangeCartItemsSelectedType>;
}


export interface IMutationsUnlockOrganizationContactArgs {
  command: IInputLockUnlockOrganizationContactType;
}


export interface IMutationsUpdateCartDynamicPropertiesArgs {
  command: IInputUpdateCartDynamicPropertiesType;
}


export interface IMutationsUpdateCartItemDynamicPropertiesArgs {
  command: IInputUpdateCartItemDynamicPropertiesType;
}


export interface IMutationsUpdateCartPaymentDynamicPropertiesArgs {
  command: IInputUpdateCartPaymentDynamicPropertiesType;
}


export interface IMutationsUpdateCartQuantityArgs {
  command: IInputUpdateCartQuantity;
}


export interface IMutationsUpdateCartShipmentDynamicPropertiesArgs {
  command: IInputUpdateCartShipmentDynamicPropertiesType;
}


export interface IMutationsUpdateContactArgs {
  command: IInputUpdateContactType;
}


export interface IMutationsUpdateMemberAddressesArgs {
  command: IInputUpdateMemberAddressType;
}


export interface IMutationsUpdateMemberDynamicPropertiesArgs {
  command: IInputUpdateMemberDynamicPropertiesType;
}


export interface IMutationsUpdateOrderDynamicPropertiesArgs {
  command: IInputUpdateOrderDynamicPropertiesType;
}


export interface IMutationsUpdateOrderItemDynamicPropertiesArgs {
  command: IInputUpdateOrderItemDynamicPropertiesType;
}


export interface IMutationsUpdateOrderPaymentDynamicPropertiesArgs {
  command: IInputUpdateOrderPaymentDynamicPropertiesType;
}


export interface IMutationsUpdateOrderShipmentDynamicPropertiesArgs {
  command: IInputUpdateOrderShipmentDynamicPropertiesType;
}


export interface IMutationsUpdateOrganizationArgs {
  command: IInputUpdateOrganizationType;
}


export interface IMutationsUpdatePersonalDataArgs {
  command: IInputUpdatePersonalDataType;
}


export interface IMutationsUpdatePurchaseRequestByDocumentsArgs {
  command: IInputUpdatePurchaseRequestByDocumentsType;
}


export interface IMutationsUpdateQuoteAddressesArgs {
  command: IUpdateQuoteAddressesCommandType;
}


export interface IMutationsUpdateQuoteAttachmentsArgs {
  command: IUpdateQuoteAttachmentsCommandType;
}


export interface IMutationsUpdateQuoteDynamicPropertiesArgs {
  command: IUpdateQuoteDynamicPropertiesCommandType;
}


export interface IMutationsUpdateRoleArgs {
  command: IInputUpdateRoleType;
}


export interface IMutationsUpdateUserArgs {
  command: IInputUpdateUserType;
}


export interface IMutationsUpdateWishListItemsArgs {
  command: IInputUpdateWishlistItemsType;
}

export interface INewsArticleAuthor {
  __typename?: 'NewsArticleAuthor';
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
}

export interface INewsArticleContent {
  __typename?: 'NewsArticleContent';
  author?: Maybe<INewsArticleAuthor>;
  content?: Maybe<Scalars['String']['output']>;
  contentPreview?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isArchived: Scalars['Boolean']['output'];
  listPreview?: Maybe<Scalars['String']['output']>;
  listTitle?: Maybe<Scalars['String']['output']>;
  publishDate?: Maybe<Scalars['DateTime']['output']>;
  seoInfo: ISeoInfo;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
}

/** A connection from an object to a list of objects of type `NewsArticleContent`. */
export interface INewsArticleContentConnection {
  __typename?: 'NewsArticleContentConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<INewsArticleContentEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<INewsArticleContent>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `NewsArticleContent`. */
export interface INewsArticleContentEdge {
  __typename?: 'NewsArticleContentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<INewsArticleContent>;
}

export interface IOrderAddressType {
  __typename?: 'OrderAddressType';
  /** Address type */
  addressType?: Maybe<Scalars['Int']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']['output']>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** First name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Id */
  key?: Maybe<Scalars['String']['output']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']['output']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode: Scalars['String']['output'];
  /** Region id */
  regionId?: Maybe<Scalars['String']['output']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']['output']>;
  /** Zip */
  zip?: Maybe<Scalars['String']['output']>;
}

export interface IOrderConfigurationItemFileType {
  __typename?: 'OrderConfigurationItemFileType';
  /** MIME type of the file */
  contentType?: Maybe<Scalars['String']['output']>;
  /** Name of the file */
  name: Scalars['String']['output'];
  /** Size of the file */
  size: Scalars['Long']['output'];
  /** URL of the file */
  url: Scalars['String']['output'];
}

export interface IOrderConfigurationItemType {
  __typename?: 'OrderConfigurationItemType';
  /** Configuration item custom text */
  customText?: Maybe<Scalars['String']['output']>;
  /** List of files for 'File' configuration item section */
  files?: Maybe<Array<Maybe<IOrderConfigurationItemFileType>>>;
  /** Configuration item ID */
  id: Scalars['String']['output'];
  /** Configuration item name */
  name?: Maybe<Scalars['String']['output']>;
  /** Configuration item type. Possible values: 'Product', 'Text', 'File' */
  type: Scalars['String']['output'];
}

export interface IOrderDiscountType {
  __typename?: 'OrderDiscountType';
  /** Order discount amount */
  amount: IMoneyType;
  coupon?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the new PromotionDescription field instead */
  description?: Maybe<Scalars['String']['output']>;
  /** Description of the promotion */
  promotionDescription?: Maybe<Scalars['String']['output']>;
  promotionId?: Maybe<Scalars['String']['output']>;
  /** Name of the promotion */
  promotionName?: Maybe<Scalars['String']['output']>;
}

export interface IOrderLineItemType {
  __typename?: 'OrderLineItemType';
  cancelReason?: Maybe<Scalars['String']['output']>;
  cancelledDate?: Maybe<Scalars['DateTime']['output']>;
  catalogId: Scalars['String']['output'];
  categoryId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  /** Configuration items for configurable product */
  configurationItems?: Maybe<Array<Maybe<IOrderConfigurationItemType>>>;
  currency: ICurrencyType;
  discountAmount: IMoneyType;
  discountAmountWithTax: IMoneyType;
  discountTotal: IMoneyType;
  discountTotalWithTax: IMoneyType;
  discounts: Array<IOrderDiscountType>;
  /** Customer order Line item dynamic property values */
  dynamicProperties: Array<IDynamicPropertyValueType>;
  extendedPrice: IMoneyType;
  extendedPriceWithTax: IMoneyType;
  fulfillmentCenterId?: Maybe<Scalars['String']['output']>;
  fulfillmentCenterName?: Maybe<Scalars['String']['output']>;
  fulfillmentLocationCode?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isCancelled: Scalars['Boolean']['output'];
  isGift?: Maybe<Scalars['Boolean']['output']>;
  length?: Maybe<Scalars['Decimal']['output']>;
  listTotal: IMoneyType;
  listTotalWithTax: IMoneyType;
  measureUnit?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  objectType: Scalars['String']['output'];
  outerId?: Maybe<Scalars['String']['output']>;
  placedPrice: IMoneyType;
  placedPriceWithTax: IMoneyType;
  price: IMoneyType;
  priceId?: Maybe<Scalars['String']['output']>;
  priceWithTax: IMoneyType;
  product?: Maybe<IProduct>;
  productId: Scalars['String']['output'];
  productOuterId?: Maybe<Scalars['String']['output']>;
  productType?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  reserveQuantity: Scalars['Int']['output'];
  shippingMethodCode?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the PlacedPrice should be visible to the customer */
  showPlacedPrice: Scalars['Boolean']['output'];
  sku: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  statusDisplayValue?: Maybe<Scalars['String']['output']>;
  taxDetails: Array<IOrderTaxDetailType>;
  taxPercentRate: Scalars['Decimal']['output'];
  taxTotal: IMoneyType;
  taxType?: Maybe<Scalars['String']['output']>;
  vendor?: Maybe<ICommonVendor>;
  weight?: Maybe<Scalars['Decimal']['output']>;
  weightUnit?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Decimal']['output']>;
}

export interface IOrderPaymentMethodType {
  __typename?: 'OrderPaymentMethodType';
  code: Scalars['String']['output'];
  currency: ICurrencyType;
  description?: Maybe<Scalars['String']['output']>;
  discountAmount: IMoneyType;
  discountAmountWithTax: IMoneyType;
  isActive: Scalars['Boolean']['output'];
  isAvailableForPartial: Scalars['Boolean']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** Localized name of payment method. */
  name?: Maybe<Scalars['String']['output']>;
  paymentMethodGroupType: Scalars['Int']['output'];
  paymentMethodType: Scalars['Int']['output'];
  price: IMoneyType;
  priceWithTax: IMoneyType;
  priority: Scalars['Int']['output'];
  storeId?: Maybe<Scalars['String']['output']>;
  taxDetails?: Maybe<Array<IOrderTaxDetailType>>;
  taxPercentRate: Scalars['Decimal']['output'];
  taxTotal: IMoneyType;
  taxType?: Maybe<Scalars['String']['output']>;
  total: IMoneyType;
  totalWithTax: IMoneyType;
  typeName: Scalars['String']['output'];
}

export interface IOrderShipmentItemType {
  __typename?: 'OrderShipmentItemType';
  barCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lineItem?: Maybe<IOrderLineItemType>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  outerId?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  status?: Maybe<Scalars['String']['output']>;
}

export interface IOrderShipmentPackageType {
  __typename?: 'OrderShipmentPackageType';
  barCode?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['String']['output'];
  items: Array<IOrderShipmentItemType>;
  length?: Maybe<Scalars['Decimal']['output']>;
  measureUnit?: Maybe<Scalars['String']['output']>;
  packageType?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Decimal']['output']>;
  weightUnit?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Decimal']['output']>;
}

export interface IOrderShipmentType {
  __typename?: 'OrderShipmentType';
  cancelReason?: Maybe<Scalars['String']['output']>;
  cancelledDate?: Maybe<Scalars['DateTime']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  currency: ICurrencyType;
  customerOrderId?: Maybe<Scalars['String']['output']>;
  deliveryAddress?: Maybe<IOrderAddressType>;
  deliveryDate?: Maybe<Scalars['DateTime']['output']>;
  discountAmount: IMoneyType;
  discountAmountWithTax: IMoneyType;
  discounts: Array<IOrderDiscountType>;
  /** Customer order Shipment dynamic property values */
  dynamicProperties: Array<IDynamicPropertyValueType>;
  employeeId?: Maybe<Scalars['String']['output']>;
  employeeName?: Maybe<Scalars['String']['output']>;
  fee: IMoneyType;
  feeWithTax: IMoneyType;
  fulfillmentCenterId?: Maybe<Scalars['String']['output']>;
  fulfillmentCenterName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['String']['output'];
  inPayments: Array<IPaymentInType>;
  isApproved: Scalars['Boolean']['output'];
  isCancelled: Scalars['Boolean']['output'];
  items: Array<IOrderShipmentItemType>;
  length?: Maybe<Scalars['Decimal']['output']>;
  measureUnit?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  objectType: Scalars['String']['output'];
  operationType: Scalars['String']['output'];
  organizationId?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  outerId?: Maybe<Scalars['String']['output']>;
  packages: Array<IOrderShipmentPackageType>;
  parentOperationId?: Maybe<Scalars['String']['output']>;
  pickupLocation?: Maybe<IPickupLocationType>;
  price: IMoneyType;
  priceWithTax: IMoneyType;
  shipmentMethodCode?: Maybe<Scalars['String']['output']>;
  shipmentMethodOption?: Maybe<Scalars['String']['output']>;
  shippingMethod?: Maybe<IOrderShippingMethodType>;
  status?: Maybe<Scalars['String']['output']>;
  statusDisplayValue?: Maybe<Scalars['String']['output']>;
  taxDetails: Array<IOrderTaxDetailType>;
  taxPercentRate: Scalars['Decimal']['output'];
  taxTotal: IMoneyType;
  taxType?: Maybe<Scalars['String']['output']>;
  total: IMoneyType;
  totalWithTax: IMoneyType;
  trackingNumber?: Maybe<Scalars['String']['output']>;
  trackingUrl?: Maybe<Scalars['String']['output']>;
  vendor?: Maybe<ICommonVendor>;
  weight?: Maybe<Scalars['Decimal']['output']>;
  weightUnit?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Decimal']['output']>;
}

export interface IOrderShippingMethodType {
  __typename?: 'OrderShippingMethodType';
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priority: Scalars['Int']['output'];
  storeId?: Maybe<Scalars['String']['output']>;
  taxType?: Maybe<Scalars['String']['output']>;
  typeName?: Maybe<Scalars['String']['output']>;
}

export interface IOrderTaxDetailType {
  __typename?: 'OrderTaxDetailType';
  amount: IMoneyType;
  name: Scalars['String']['output'];
  rate: IMoneyType;
}

/** Organization info */
export interface IOrganization {
  __typename?: 'Organization';
  addresses?: Maybe<IMemberAddressConnection>;
  /** Business category */
  businessCategory?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<IContactConnection>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<IMemberAddressType>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<IMemberAddressType>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<IDynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']['output']>>;
  groups: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  /** Member type */
  memberType: Scalars['String']['output'];
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Owner id */
  ownerId?: Maybe<Scalars['String']['output']>;
  /** Parent id */
  parentId?: Maybe<Scalars['String']['output']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']['output']>>;
  /** Request related SEO info */
  seoInfo?: Maybe<ISeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String']['output'];
  /** Status */
  status?: Maybe<Scalars['String']['output']>;
}


/** Organization info */
export interface IOrganizationAddressesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}


/** Organization info */
export interface IOrganizationContactsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchPhrase?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}


/** Organization info */
export interface IOrganizationSeoInfoArgs {
  cultureName: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}

/** A connection from an object to a list of objects of type `Organization`. */
export interface IOrganizationConnection {
  __typename?: 'OrganizationConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IOrganizationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IOrganization>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `Organization`. */
export interface IOrganizationEdge {
  __typename?: 'OrganizationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IOrganization>;
}

export interface IOutlineItemType {
  __typename?: 'OutlineItemType';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** SEO info */
  seoInfos?: Maybe<Array<ISeoInfo>>;
  seoObjectType: Scalars['String']['output'];
}

export interface IOutlineType {
  __typename?: 'OutlineType';
  /** Outline items */
  items?: Maybe<Array<IOutlineItemType>>;
}

/** A connection from an object to a list of objects of type `Page`. */
export interface IPageConnection {
  __typename?: 'PageConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IPageEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IPageType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** A connection from an object to a list of objects of type `PageDocument`. */
export interface IPageDocumentConnection {
  __typename?: 'PageDocumentConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IPageDocumentEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IPageDocumentType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `PageDocument`. */
export interface IPageDocumentEdge {
  __typename?: 'PageDocumentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IPageDocumentType>;
}

export interface IPageDocumentType {
  __typename?: 'PageDocumentType';
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Page permalink */
  permalink?: Maybe<Scalars['String']['output']>;
  /** Page source */
  source?: Maybe<Scalars['String']['output']>;
}

/** An edge in a connection from an object to another object of type `Page`. */
export interface IPageEdge {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IPageType>;
}

/** Information about pagination in a connection. */
export interface IPageInfo {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
}

export interface IPageType {
  __typename?: 'PageType';
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Page title */
  name?: Maybe<Scalars['String']['output']>;
  /** Page permalink */
  permalink?: Maybe<Scalars['String']['output']>;
  /** Page file relative url */
  relativeUrl: Scalars['String']['output'];
}

export interface IPasswordOptionsType {
  __typename?: 'PasswordOptionsType';
  /** Require a digit ('0' - '9'). */
  requireDigit: Scalars['Boolean']['output'];
  /** Require a lower case letter ('a' - 'z'). */
  requireLowercase: Scalars['Boolean']['output'];
  /** Require a non letter or digit character. */
  requireNonAlphanumeric: Scalars['Boolean']['output'];
  /** Require an upper case letter ('A' - 'Z'). */
  requireUppercase: Scalars['Boolean']['output'];
  /** The minimum length a password must be. */
  requiredLength: Scalars['Int']['output'];
  /** The minimum number of unique chars a password must comprised of. */
  requiredUniqueChars: Scalars['Int']['output'];
}

/** A connection from an object to a list of objects of type `PaymentIn`. */
export interface IPaymentInConnection {
  __typename?: 'PaymentInConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IPaymentInEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IPaymentInType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `PaymentIn`. */
export interface IPaymentInEdge {
  __typename?: 'PaymentInEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IPaymentInType>;
}

export interface IPaymentInType {
  __typename?: 'PaymentInType';
  authorizedDate?: Maybe<Scalars['DateTime']['output']>;
  billingAddress?: Maybe<IOrderAddressType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  cancelledDate?: Maybe<Scalars['DateTime']['output']>;
  capturedDate?: Maybe<Scalars['DateTime']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  currency: ICurrencyType;
  customerId: Scalars['String']['output'];
  customerName?: Maybe<Scalars['String']['output']>;
  /** Customer order Payment dynamic property values */
  dynamicProperties: Array<IDynamicPropertyValueType>;
  gatewayCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  incomingDate?: Maybe<Scalars['DateTime']['output']>;
  isApproved: Scalars['Boolean']['output'];
  isCancelled: Scalars['Boolean']['output'];
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  number: Scalars['String']['output'];
  objectType: Scalars['String']['output'];
  operationType: Scalars['String']['output'];
  /** Associated Order */
  order: ICustomerOrderType;
  orderId?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  outerId?: Maybe<Scalars['String']['output']>;
  parentOperationId?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<IOrderPaymentMethodType>;
  price: IMoneyType;
  purpose?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  statusDisplayValue?: Maybe<Scalars['String']['output']>;
  sum: IMoneyType;
  tax: IMoneyType;
  transactions: Array<IPaymentTransactionType>;
  vendor?: Maybe<ICommonVendor>;
  voidedDate?: Maybe<Scalars['DateTime']['output']>;
}

export interface IPaymentMethodType {
  __typename?: 'PaymentMethodType';
  /** Value of payment gateway code */
  code: Scalars['String']['output'];
  /** Currency */
  currency: ICurrencyType;
  /** Payment method description */
  description?: Maybe<Scalars['String']['output']>;
  /** Discount amount */
  discountAmount: IMoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: IMoneyType;
  /** Is payment method available for partial payments */
  isAvailableForPartial: Scalars['Boolean']['output'];
  /** Value of payment method logo absolute URL */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** Localized name of payment method. */
  name?: Maybe<Scalars['String']['output']>;
  /** Value of payment group type */
  paymentMethodGroupType: Scalars['String']['output'];
  /** Value of payment method type */
  paymentMethodType: Scalars['String']['output'];
  /** Price */
  price: IMoneyType;
  /** Price with tax */
  priceWithTax: IMoneyType;
  /** Value of payment method priority */
  priority: Scalars['Int']['output'];
  /** Tax details */
  taxDetails?: Maybe<Array<ITaxDetailType>>;
  /** Tax percent rate */
  taxPercentRate: Scalars['Decimal']['output'];
  /** Tax total */
  taxTotal: IMoneyType;
  /** Tax type */
  taxType?: Maybe<Scalars['String']['output']>;
  /** Total */
  total: IMoneyType;
  /** Total with tax */
  totalWithTax: IMoneyType;
}

export interface IPaymentTransactionType {
  __typename?: 'PaymentTransactionType';
  amount: IMoneyType;
  gatewayIpAddress?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isProcessed: Scalars['Boolean']['output'];
  note?: Maybe<Scalars['String']['output']>;
  processAttemptCount: Scalars['Int']['output'];
  processError?: Maybe<Scalars['String']['output']>;
  processedDate?: Maybe<Scalars['DateTime']['output']>;
  requestData?: Maybe<Scalars['String']['output']>;
  responseCode?: Maybe<Scalars['String']['output']>;
  responseData?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
}

export interface IPaymentType {
  __typename?: 'PaymentType';
  /** Amount */
  amount: IMoneyType;
  /** Billing address */
  billingAddress?: Maybe<ICartAddressType>;
  /** Text comment */
  comment?: Maybe<Scalars['String']['output']>;
  /** Currency */
  currency: ICurrencyType;
  /** Discount amount */
  discountAmount: IMoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: IMoneyType;
  /** Discounts */
  discounts: Array<Maybe<IDiscountType>>;
  /** Cart payment dynamic property values */
  dynamicProperties: Array<IDynamicPropertyValueType>;
  /** Payment Id */
  id: Scalars['String']['output'];
  /** Value of payment outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Value of payment gateway code */
  paymentGatewayCode?: Maybe<Scalars['String']['output']>;
  /** Price */
  price: IMoneyType;
  /** Price with tax */
  priceWithTax: IMoneyType;
  purpose?: Maybe<Scalars['String']['output']>;
  /** Tax details */
  taxDetails: Array<ITaxDetailType>;
  /** Tax percent rate */
  taxPercentRate: Scalars['Decimal']['output'];
  /** Tax total */
  taxTotal: IMoneyType;
  /** Tax type */
  taxType?: Maybe<Scalars['String']['output']>;
  /** Total */
  total: IMoneyType;
  /** Total with tax */
  totalWithTax: IMoneyType;
  vendor?: Maybe<ICommonVendor>;
}

export interface IPickupAddressType {
  __typename?: 'PickupAddressType';
  /** Address type */
  addressType?: Maybe<Scalars['Int']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** Id */
  id: Scalars['String']['output'];
  /** Key */
  key?: Maybe<Scalars['String']['output']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Region id */
  regionId?: Maybe<Scalars['String']['output']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']['output']>;
}

export interface IPickupLocationAddressType {
  __typename?: 'PickupLocationAddressType';
  /** Address type */
  addressType?: Maybe<Scalars['Int']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** Id */
  id: Scalars['String']['output'];
  /** Key */
  key?: Maybe<Scalars['String']['output']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Region id */
  regionId?: Maybe<Scalars['String']['output']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']['output']>;
}

/** A connection from an object to a list of objects of type `PickupLocation`. */
export interface IPickupLocationConnection {
  __typename?: 'PickupLocationConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IPickupLocationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IPickupLocationType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `PickupLocation`. */
export interface IPickupLocationEdge {
  __typename?: 'PickupLocationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IPickupLocationType>;
}

export interface IPickupLocationType {
  __typename?: 'PickupLocationType';
  /** Address */
  address?: Maybe<IPickupAddressType>;
  /** ContactEmail */
  contactEmail?: Maybe<Scalars['String']['output']>;
  /** ContactPhone */
  contactPhone?: Maybe<Scalars['String']['output']>;
  /** Days until ready for pickup */
  deliveryDays?: Maybe<Scalars['Int']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** GeoLocation */
  geoLocation?: Maybe<Scalars['String']['output']>;
  /** Id */
  id: Scalars['String']['output'];
  /** IsActive */
  isActive: Scalars['Boolean']['output'];
  /** Name */
  name: Scalars['String']['output'];
  /** How long an order will be stored at a pickup point */
  storageDays?: Maybe<Scalars['Int']['output']>;
  /** WorkingHours */
  workingHours?: Maybe<Scalars['String']['output']>;
}

export interface IPriceType {
  __typename?: 'PriceType';
  /** Actual price */
  actual: IMoneyType;
  /** Actual price with tax */
  actualWithTax: IMoneyType;
  /** Currency */
  currency: Scalars['String']['output'];
  /** Discount amount */
  discountAmount: IMoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: IMoneyType;
  discountPercent: Scalars['Decimal']['output'];
  /** Discounts */
  discounts: Array<ICatalogDiscountType>;
  /** End date */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** Price list */
  list: IMoneyType;
  /** Price list with tax */
  listWithTax: IMoneyType;
  /** The product min qty */
  minQuantity?: Maybe<Scalars['Int']['output']>;
  /** The product price list */
  pricelistId?: Maybe<Scalars['String']['output']>;
  /** The product price list name */
  pricelistName?: Maybe<Scalars['String']['output']>;
  /** Sale price */
  sale: IMoneyType;
  /** Sale price with tax */
  saleWithTax: IMoneyType;
  /** Start date */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  /** Tier prices */
  tierPrices: Array<ITierPriceType>;
}

export interface IPricesSumType {
  __typename?: 'PricesSumType';
  /** Total discount amount */
  discountTotal: IMoneyType;
  /** Total price */
  total: IMoneyType;
}

/** Products are the sellable goods in an e-commerce project. */
export interface IProduct {
  __typename?: 'Product';
  /** Assets */
  assets: Array<IAsset>;
  associations?: Maybe<IProductAssociationConnection>;
  /** Product availability data */
  availabilityData: IAvailabilityData;
  brand?: Maybe<IBrandType>;
  /** Get brandName for product. */
  brandName?: Maybe<Scalars['String']['output']>;
  /** Breadcrumbs */
  breadcrumbs: Array<IBreadcrumb>;
  /** The unique ID of the catalog */
  catalogId?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ICategory>;
  /** The product SKU. */
  code: Scalars['String']['output'];
  description?: Maybe<IDescriptionType>;
  descriptions: Array<IDescriptionType>;
  /** Global Trade Item Number (GTIN) */
  gtin?: Maybe<Scalars['String']['output']>;
  hasVariations: Scalars['Boolean']['output'];
  /** Height */
  height?: Maybe<Scalars['Decimal']['output']>;
  /** The unique ID of the product. */
  id: Scalars['String']['output'];
  /** Product images */
  images: Array<IImageType>;
  /** The product main image URL. */
  imgSrc?: Maybe<Scalars['String']['output']>;
  /** Product added at least in one wishlist */
  inWishlist: Scalars['Boolean']['output'];
  /** Product is configurable */
  isConfigurable: Scalars['Boolean']['output'];
  /** Product was purchased */
  isPurchased: Scalars['Boolean']['output'];
  keyProperties: Array<IProperty>;
  /** Length */
  length?: Maybe<Scalars['Decimal']['output']>;
  /** Manufacturer Part Number (MPN) */
  manufacturerPartNumber?: Maybe<Scalars['String']['output']>;
  masterVariation?: Maybe<IVariationType>;
  /** Max. quantity */
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  /** Measure unit */
  measureUnit?: Maybe<Scalars['String']['output']>;
  /** Min. quantity */
  minQuantity?: Maybe<Scalars['Int']['output']>;
  /** Minimum product variation price */
  minVariationPrice?: Maybe<IPriceType>;
  /** The name of the product. */
  name: Scalars['String']['output'];
  /** The outer identifier */
  outerId?: Maybe<Scalars['String']['output']>;
  /** All parent categories ids relative to the requested catalog and concatenated with \ . E.g. (1/21/344) */
  outline?: Maybe<Scalars['String']['output']>;
  /** Outlines */
  outlines: Array<IOutlineType>;
  /** Defines the number of items in a package. Quantity step for your product's. */
  packSize: Scalars['Int']['output'];
  /** Product price */
  price: IPriceType;
  /** Product prices */
  prices: Array<IPriceType>;
  /** The type of product */
  productType?: Maybe<Scalars['String']['output']>;
  properties: Array<IProperty>;
  /** Product rating */
  rating?: Maybe<IRating>;
  /** Product relevance score */
  relevanceScore?: Maybe<Scalars['Float']['output']>;
  /** Request related SEO info */
  seoInfo: ISeoInfo;
  /** Request related slug for product */
  slug?: Maybe<Scalars['String']['output']>;
  variations: Array<IVariationType>;
  /** Product vendor */
  vendor?: Maybe<ICommonVendor>;
  videos?: Maybe<IVideoConnection>;
  /** Weight */
  weight?: Maybe<Scalars['Decimal']['output']>;
  /** Weight unit */
  weightUnit?: Maybe<Scalars['String']['output']>;
  /** Width */
  width?: Maybe<Scalars['Decimal']['output']>;
  /** List of wishlist ID with this product */
  wishlistIds: Array<Maybe<Scalars['String']['output']>>;
}


/** Products are the sellable goods in an e-commerce project. */
export interface IProductAssociationsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
}


/** Products are the sellable goods in an e-commerce project. */
export interface IProductDescriptionArgs {
  type?: InputMaybe<Scalars['String']['input']>;
}


/** Products are the sellable goods in an e-commerce project. */
export interface IProductDescriptionsArgs {
  type?: InputMaybe<Scalars['String']['input']>;
}


/** Products are the sellable goods in an e-commerce project. */
export interface IProductKeyPropertiesArgs {
  take?: InputMaybe<Scalars['Int']['input']>;
}


/** Products are the sellable goods in an e-commerce project. */
export interface IProductPropertiesArgs {
  names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


/** Products are the sellable goods in an e-commerce project. */
export interface IProductVideosArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
}

/** product association. */
export interface IProductAssociation {
  __typename?: 'ProductAssociation';
  associatedObjectId?: Maybe<Scalars['String']['output']>;
  associatedObjectType?: Maybe<Scalars['String']['output']>;
  priority: Scalars['Int']['output'];
  product?: Maybe<IProduct>;
  quantity?: Maybe<Scalars['Int']['output']>;
  tags: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
}

/** A connection from an object to a list of objects of type `ProductAssociation`. */
export interface IProductAssociationConnection {
  __typename?: 'ProductAssociationConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IProductAssociationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IProductAssociation>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `ProductAssociation`. */
export interface IProductAssociationEdge {
  __typename?: 'ProductAssociationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IProductAssociation>;
}

/** A connection from an object to a list of objects of type `Product`. */
export interface IProductConnection {
  __typename?: 'ProductConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IProductEdge>>>;
  /** Filter facets */
  filter_facets: Array<IFilterFacet>;
  /** Parsed filters */
  filters?: Maybe<Array<ISearchProductFilterResult>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IProduct>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** Range facets */
  range_facets: Array<IRangeFacet>;
  /** Term facets */
  term_facets: Array<ITermFacet>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `Product`. */
export interface IProductEdge {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IProduct>;
}

export enum ProductPickupAvailabilityType {
  /** Available via global transfer (within weeks) */
  GlobalTransfer = 'GlobalTransfer',
  /** Available today (within hours) */
  Today = 'Today',
  /** Available via transfer (within days) */
  Transfer = 'Transfer'
}

export interface IProductPickupLocation {
  __typename?: 'ProductPickupLocation';
  /** Address */
  address?: Maybe<IPickupLocationAddressType>;
  availabilityNote?: Maybe<Scalars['String']['output']>;
  availabilityType?: Maybe<ProductPickupAvailabilityType>;
  availableQuantity?: Maybe<Scalars['Long']['output']>;
  /** ContactEmail */
  contactEmail?: Maybe<Scalars['String']['output']>;
  /** ContactPhone */
  contactPhone?: Maybe<Scalars['String']['output']>;
  /** Days until ready for pickup */
  deliveryDays?: Maybe<Scalars['Int']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** GeoLocation */
  geoLocation?: Maybe<Scalars['String']['output']>;
  /** Id */
  id: Scalars['String']['output'];
  /** IsActive */
  isActive: Scalars['Boolean']['output'];
  /** Name */
  name: Scalars['String']['output'];
  /** How long an order will be stored at a pickup point */
  storageDays?: Maybe<Scalars['Int']['output']>;
  /** WorkingHours */
  workingHours?: Maybe<Scalars['String']['output']>;
}

/** A connection from an object to a list of objects of type `ProductPickupLocation`. */
export interface IProductPickupLocationConnection {
  __typename?: 'ProductPickupLocationConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IProductPickupLocationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IProductPickupLocation>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `ProductPickupLocation`. */
export interface IProductPickupLocationEdge {
  __typename?: 'ProductPickupLocationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IProductPickupLocation>;
}

export interface IProductSuggestionsQueryResponseType {
  __typename?: 'ProductSuggestionsQueryResponseType';
  suggestions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

/** Represents promotion object */
export interface IPromotion {
  __typename?: 'Promotion';
  /** Promotion description */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the promotion. */
  id: Scalars['String']['output'];
  /** The name of the promotion */
  name: Scalars['String']['output'];
  /** Promotion type */
  type?: Maybe<Scalars['String']['output']>;
}

/** Products attributes. */
export interface IProperty {
  __typename?: 'Property';
  /** Color code in CSS format. */
  colorCode?: Maybe<Scalars['String']['output']>;
  /** The display order of the property. */
  displayOrder?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<IPropertyGroup>;
  /** Is property hidden. */
  hidden: Scalars['Boolean']['output'];
  /** The unique ID of the property. */
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
  /** Is property has multiple values. */
  multivalue: Scalars['Boolean']['output'];
  /** The name of the property. */
  name: Scalars['String']['output'];
  propertyDictionaryItems?: Maybe<IPropertyDictionaryItemConnection>;
  propertyType: PropertyType;
  /** ValueType of the property. */
  propertyValueType: PropertyValueTypes;
  value?: Maybe<Scalars['PropertyValue']['output']>;
  /** The display order of the value. */
  valueDisplayOrder?: Maybe<Scalars['Int']['output']>;
  valueId?: Maybe<Scalars['String']['output']>;
}


/** Products attributes. */
export interface IPropertyPropertyDictionaryItemsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
}

/** A connection from an object to a list of objects of type `Property`. */
export interface IPropertyConnection {
  __typename?: 'PropertyConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IPropertyEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IProperty>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** Represents property dictionary item */
export interface IPropertyDictionaryItem {
  __typename?: 'PropertyDictionaryItem';
  /** Color code in CSS format. */
  colorCode: Scalars['String']['output'];
  /** The unique ID of the property dictionary item. */
  id: Scalars['String']['output'];
  /** Value order. */
  sortOrder: Scalars['Int']['output'];
  /** Value alias. */
  value?: Maybe<Scalars['String']['output']>;
}

/** A connection from an object to a list of objects of type `PropertyDictionaryItem`. */
export interface IPropertyDictionaryItemConnection {
  __typename?: 'PropertyDictionaryItemConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IPropertyDictionaryItemEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IPropertyDictionaryItem>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `PropertyDictionaryItem`. */
export interface IPropertyDictionaryItemEdge {
  __typename?: 'PropertyDictionaryItemEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IPropertyDictionaryItem>;
}

/** An edge in a connection from an object to another object of type `Property`. */
export interface IPropertyEdge {
  __typename?: 'PropertyEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IProperty>;
}

/** Property group. */
export interface IPropertyGroup {
  __typename?: 'PropertyGroup';
  /** The localized description of the property group. */
  description?: Maybe<Scalars['String']['output']>;
  /** The display order of the property group. */
  displayOrder?: Maybe<Scalars['Int']['output']>;
  /** The unique ID of the property group. */
  id: Scalars['String']['output'];
  /** The localized name of the property group. */
  name?: Maybe<Scalars['String']['output']>;
}

/** The type of catalog property. */
export enum PropertyType {
  Catalog = 'CATALOG',
  Category = 'CATEGORY',
  Product = 'PRODUCT',
  Variation = 'VARIATION'
}

/** The type of catalog property value. */
export enum PropertyValueTypes {
  Boolean = 'BOOLEAN',
  Color = 'COLOR',
  DateTime = 'DATE_TIME',
  GeoPoint = 'GEO_POINT',
  Html = 'HTML',
  Integer = 'INTEGER',
  LongText = 'LONG_TEXT',
  Measure = 'MEASURE',
  Number = 'NUMBER',
  ShortText = 'SHORT_TEXT'
}

/** A connection from an object to a list of objects of type `PurchaseRequest`. */
export interface IPurchaseRequestConnection {
  __typename?: 'PurchaseRequestConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IPurchaseRequestEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IPurchaseRequestType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `PurchaseRequest`. */
export interface IPurchaseRequestEdge {
  __typename?: 'PurchaseRequestEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IPurchaseRequestType>;
}

export interface IPurchaseRequestSourceType {
  __typename?: 'PurchaseRequestSourceType';
  contentType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Long']['output'];
  url: Scalars['String']['output'];
}

export interface IPurchaseRequestType {
  __typename?: 'PurchaseRequestType';
  createdBy: Scalars['String']['output'];
  createdDate: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  number: Scalars['String']['output'];
  quoteId?: Maybe<Scalars['String']['output']>;
  sources: Array<IPurchaseRequestSourceType>;
  storeId: Scalars['String']['output'];
}

/** A connection from an object to a list of objects of type `PushMessage`. */
export interface IPushMessageConnection {
  __typename?: 'PushMessageConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IPushMessageEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IPushMessageType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `PushMessage`. */
export interface IPushMessageEdge {
  __typename?: 'PushMessageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IPushMessageType>;
}

export interface IPushMessageType {
  __typename?: 'PushMessageType';
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isHidden: Scalars['Boolean']['output'];
  isRead: Scalars['Boolean']['output'];
  shortMessage: Scalars['String']['output'];
}

export interface IQuery {
  __typename?: 'Query';
  backInStockSubscriptions?: Maybe<IBackInStockSubscriptionConnection>;
  brand?: Maybe<IBrandType>;
  brands?: Maybe<IBrandConnection>;
  canLeaveFeedback?: Maybe<Scalars['Boolean']['output']>;
  cart?: Maybe<ICartType>;
  cartPickupLocations?: Maybe<ICartPickupLocationConnection>;
  carts?: Maybe<ICartConnection>;
  categories?: Maybe<ICategoryConnection>;
  category?: Maybe<ICategory>;
  checkEmailUniqueness?: Maybe<Scalars['Boolean']['output']>;
  checkUsernameUniqueness?: Maybe<Scalars['Boolean']['output']>;
  childCategories?: Maybe<IChildCategoriesQueryResponseType>;
  configurationItems?: Maybe<IConfigurationItemsResponseType>;
  contact?: Maybe<IContactType>;
  contacts?: Maybe<IContactConnection>;
  contract?: Maybe<IContractType>;
  countries: Array<ICountryType>;
  customerReviews?: Maybe<ICustomerReviewConnection>;
  dynamicProperties?: Maybe<IDynamicPropertyConnection>;
  dynamicProperty?: Maybe<IDynamicPropertyType>;
  evaluateDynamicContent?: Maybe<IEvaluateDynamicContentResultType>;
  fcmSettings?: Maybe<IFcmSettingsType>;
  fileUploadOptions?: Maybe<IFileUploadScopeOptionsType>;
  fulfillmentCenter?: Maybe<IFulfillmentCenterType>;
  fulfillmentCenters?: Maybe<IFulfillmentCenterConnection>;
  getSavedForLater?: Maybe<ICartType>;
  loyaltyBalance?: Maybe<ILoyaltyBalanceResult>;
  loyaltyPointsHistory?: Maybe<ILoyaltyOperationLogConnection>;
  me?: Maybe<IUserType>;
  menu?: Maybe<IMenuLinkListType>;
  menus: Array<IMenuLinkListType>;
  newsArticle?: Maybe<INewsArticleContent>;
  newsArticleAuthor?: Maybe<INewsArticleAuthor>;
  newsArticleTags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  newsArticles?: Maybe<INewsArticleContentConnection>;
  order?: Maybe<ICustomerOrderType>;
  orderLineItemStatuses?: Maybe<ILocalizedSettingResponseType>;
  orderStatuses?: Maybe<ILocalizedSettingResponseType>;
  orders?: Maybe<ICustomerOrderConnection>;
  organization?: Maybe<IOrganization>;
  organizationContracts?: Maybe<IContractConnection>;
  organizationOrders?: Maybe<ICustomerOrderConnection>;
  organizations?: Maybe<IOrganizationConnection>;
  page?: Maybe<IPageType>;
  pageDocument?: Maybe<IPageDocumentType>;
  pageDocuments?: Maybe<IPageDocumentConnection>;
  pages?: Maybe<IPageConnection>;
  paymentStatuses?: Maybe<ILocalizedSettingResponseType>;
  payments?: Maybe<IPaymentInConnection>;
  pendingForApprovals?: Maybe<IDemoCustomerOrderConnection>;
  pickupLocations?: Maybe<IPickupLocationConnection>;
  pricesSum?: Maybe<IPricesSumType>;
  product?: Maybe<IProduct>;
  productConfiguration?: Maybe<IConfigurationQueryResponseType>;
  productPickupLocations?: Maybe<IProductPickupLocationConnection>;
  productSuggestions?: Maybe<IProductSuggestionsQueryResponseType>;
  products?: Maybe<IProductConnection>;
  properties?: Maybe<IPropertyConnection>;
  property?: Maybe<IProperty>;
  purchaseRequest?: Maybe<IPurchaseRequestType>;
  purchaseRequests?: Maybe<IPurchaseRequestConnection>;
  pushMessages?: Maybe<IPushMessageConnection>;
  quote?: Maybe<IQuoteType>;
  quoteAttachmentOptions?: Maybe<IFileUploadScopeOptionsType>;
  quotes?: Maybe<IQuoteConnection>;
  recentlyBrowsed?: Maybe<IGetRecentlyBrowsedResponseType>;
  recommendations?: Maybe<IGetRecommendationsResponseType>;
  regions: Array<ICountryRegionType>;
  /** @deprecated Deprecated. Use sendPasswordResetEmail command. */
  requestPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  role?: Maybe<IRoleType>;
  searchHistory?: Maybe<ISearchHistoryResultType>;
  sharedWishlist?: Maybe<IWishlistType>;
  shipmentStatuses?: Maybe<ILocalizedSettingResponseType>;
  skyflowCards?: Maybe<ISkyflowCardResponseType>;
  slugInfo?: Maybe<ISlugInfoResponseType>;
  store?: Maybe<IStoreResponseType>;
  tasks?: Maybe<IWorkTaskConnection>;
  user?: Maybe<IUserType>;
  validateCoupon?: Maybe<Scalars['Boolean']['output']>;
  validatePassword?: Maybe<ICustomIdentityResultType>;
  vendor?: Maybe<IVendor>;
  whiteLabelingSettings?: Maybe<IWhiteLabelingSettingsType>;
  wishlist?: Maybe<IWishlistType>;
  wishlists?: Maybe<IWishlistConnection>;
}


export interface IQueryBackInStockSubscriptionsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryBrandArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}


export interface IQueryBrandsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryCanLeaveFeedbackArgs {
  entityId: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}


export interface IQueryCartArgs {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryCartPickupLocationsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cartId: Scalars['String']['input'];
  cultureName: Scalars['String']['input'];
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
}


export interface IQueryCartsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryCategoriesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  fuzzyLevel?: InputMaybe<Scalars['Int']['input']>;
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryCategoryArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryCheckEmailUniquenessArgs {
  email: Scalars['String']['input'];
}


export interface IQueryCheckUsernameUniquenessArgs {
  username: Scalars['String']['input'];
}


export interface IQueryChildCategoriesArgs {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  maxLevel?: InputMaybe<Scalars['Int']['input']>;
  onlyActive?: InputMaybe<Scalars['Boolean']['input']>;
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  productFilter?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryConfigurationItemsArgs {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode: Scalars['String']['input'];
  lineItemId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryContactArgs {
  id: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryContactsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchPhrase?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryContractArgs {
  id?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryCustomerReviewsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  entityId: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
}


export interface IQueryDynamicPropertiesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  objectType?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryDynamicPropertyArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  idOrName: Scalars['String']['input'];
  objectType?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryEvaluateDynamicContentArgs {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  placeName?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
  userGroups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}


export interface IQueryFileUploadOptionsArgs {
  scope?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryFulfillmentCenterArgs {
  id: Scalars['String']['input'];
}


export interface IQueryFulfillmentCentersArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fulfillmentCenterIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  query?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryGetSavedForLaterArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}


export interface IQueryLoyaltyBalanceArgs {
  orderId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryLoyaltyPointsHistoryArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  operationType?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryMeArgs {
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryMenuArgs {
  cultureName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}


export interface IQueryMenusArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
}


export interface IQueryNewsArticleArgs {
  id: Scalars['String']['input'];
  languageCode: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}


export interface IQueryNewsArticleAuthorArgs {
  authorId: Scalars['String']['input'];
}


export interface IQueryNewsArticleTagsArgs {
  languageCode: Scalars['String']['input'];
}


export interface IQueryNewsArticlesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  authorId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  languageCode: Scalars['String']['input'];
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryOrderArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryOrderLineItemStatusesArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryOrderStatusesArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryOrdersArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryOrganizationArgs {
  id: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryOrganizationContractsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  statuses?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryOrganizationOrdersArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryOrganizationsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  searchPhrase?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryPageArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}


export interface IQueryPageDocumentArgs {
  id: Scalars['String']['input'];
}


export interface IQueryPageDocumentsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}


export interface IQueryPagesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}


export interface IQueryPaymentStatusesArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryPaymentsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryPendingForApprovalsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  approverId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryPickupLocationsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryPricesSumArgs {
  cartId: Scalars['String']['input'];
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode: Scalars['String']['input'];
  lineItemIds: Array<InputMaybe<Scalars['String']['input']>>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryProductArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryProductConfigurationArgs {
  configurableProductId: Scalars['String']['input'];
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryProductPickupLocationsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
}


export interface IQueryProductSuggestionsArgs {
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  storeId: Scalars['String']['input'];
}


export interface IQueryProductsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<Scalars['String']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  fuzzyLevel?: InputMaybe<Scalars['Int']['input']>;
  preserveUserQuery?: InputMaybe<Scalars['Boolean']['input']>;
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  query?: InputMaybe<Scalars['String']['input']>;
  selectedAddress?: InputMaybe<Scalars['String']['input']>;
  selectedAddressId?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryPropertiesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  storeId: Scalars['String']['input'];
  types?: InputMaybe<Array<InputMaybe<PropertyType>>>;
}


export interface IQueryPropertyArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
}


export interface IQueryPurchaseRequestArgs {
  purchaseRequestId: Scalars['String']['input'];
}


export interface IQueryPurchaseRequestsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryPushMessagesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  unreadOnly?: InputMaybe<Scalars['Boolean']['input']>;
  withHidden?: InputMaybe<Scalars['Boolean']['input']>;
}


export interface IQueryQuoteArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryQuotesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryRecentlyBrowsedArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  maxProducts?: InputMaybe<Scalars['Int']['input']>;
  storeId: Scalars['String']['input'];
}


export interface IQueryRecommendationsArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  fallbackProductsFilter?: InputMaybe<Scalars['String']['input']>;
  maxRecommendations?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  previousOutline?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryRegionsArgs {
  countryId: Scalars['String']['input'];
}


export interface IQueryRequestPasswordResetArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  loginOrEmail: Scalars['String']['input'];
  storeId?: InputMaybe<Scalars['String']['input']>;
  urlSuffix?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryRoleArgs {
  roleName: Scalars['String']['input'];
}


export interface IQuerySearchHistoryArgs {
  maxCount: Scalars['Int']['input'];
  storeId: Scalars['String']['input'];
}


export interface IQuerySharedWishlistArgs {
  sharingKey: Scalars['String']['input'];
}


export interface IQueryShipmentStatusesArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
}


export interface IQuerySkyflowCardsArgs {
  storeId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQuerySlugInfoArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  permalink?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryStoreArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryTasksArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  endDueDate?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  responsibleId?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  startDueDate?: InputMaybe<Scalars['DateTime']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryUserArgs {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  loginProvider?: InputMaybe<Scalars['String']['input']>;
  providerKey?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryValidateCouponArgs {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  coupon: Scalars['String']['input'];
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}


export interface IQueryValidatePasswordArgs {
  password: Scalars['String']['input'];
}


export interface IQueryVendorArgs {
  id: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryWhiteLabelingSettingsArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}


export interface IQueryWishlistArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  listId: Scalars['String']['input'];
}


export interface IQueryWishlistsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}

export interface IQuoteAddressType {
  __typename?: 'QuoteAddressType';
  addressType?: Maybe<Scalars['Int']['output']>;
  city: Scalars['String']['output'];
  countryCode?: Maybe<Scalars['String']['output']>;
  countryName: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  /** ID */
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** Company name */
  organization?: Maybe<Scalars['String']['output']>;
  outerId?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  regionId?: Maybe<Scalars['String']['output']>;
  regionName?: Maybe<Scalars['String']['output']>;
}

export interface IQuoteAttachmentType {
  __typename?: 'QuoteAttachmentType';
  contentType?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  size: Scalars['Long']['output'];
  url: Scalars['String']['output'];
}

export interface IQuoteConfigurationItemFileType {
  __typename?: 'QuoteConfigurationItemFileType';
  /** MIME type of the file */
  contentType?: Maybe<Scalars['String']['output']>;
  /** Name of the file */
  name: Scalars['String']['output'];
  /** Size of the file */
  size: Scalars['Long']['output'];
  /** URL of the file */
  url: Scalars['String']['output'];
}

export interface IQuoteConfigurationItemType {
  __typename?: 'QuoteConfigurationItemType';
  /** Configuration item custom text */
  customText?: Maybe<Scalars['String']['output']>;
  /** List of files for 'File' configuration item section */
  files?: Maybe<Array<Maybe<IQuoteConfigurationItemFileType>>>;
  /** Configuration item ID */
  id: Scalars['String']['output'];
  /** Configuration item name */
  name?: Maybe<Scalars['String']['output']>;
  /** Configuration item type. Possible values: 'Product', 'Text', 'File' */
  type: Scalars['String']['output'];
}

/** A connection from an object to a list of objects of type `Quote`. */
export interface IQuoteConnection {
  __typename?: 'QuoteConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IQuoteEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IQuoteType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `Quote`. */
export interface IQuoteEdge {
  __typename?: 'QuoteEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IQuoteType>;
}

export interface IQuoteItemType {
  __typename?: 'QuoteItemType';
  catalogId?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  /** Configuration items for configurable product */
  configurationItems?: Maybe<Array<Maybe<IQuoteConfigurationItemType>>>;
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  listPrice: IMoneyType;
  name: Scalars['String']['output'];
  product?: Maybe<IProduct>;
  productId?: Maybe<Scalars['String']['output']>;
  proposalPrices: Array<IQuoteTierPriceType>;
  quantity: Scalars['Int']['output'];
  salePrice: IMoneyType;
  selectedTierPrice?: Maybe<IQuoteTierPriceType>;
  sku?: Maybe<Scalars['String']['output']>;
  taxType?: Maybe<Scalars['String']['output']>;
}

export interface IQuoteShipmentMethodType {
  __typename?: 'QuoteShipmentMethodType';
  currency: ICurrencyType;
  logoUrl?: Maybe<Scalars['String']['output']>;
  optionName?: Maybe<Scalars['String']['output']>;
  price: IMoneyType;
  shipmentMethodCode: Scalars['String']['output'];
  typeName?: Maybe<Scalars['String']['output']>;
}

export interface IQuoteTaxDetailType {
  __typename?: 'QuoteTaxDetailType';
  amount: IMoneyType;
  name?: Maybe<Scalars['String']['output']>;
  rate: IMoneyType;
}

export interface IQuoteTierPriceType {
  __typename?: 'QuoteTierPriceType';
  price: IMoneyType;
  quantity: Scalars['Long']['output'];
}

export interface IQuoteTotalsType {
  __typename?: 'QuoteTotalsType';
  adjustmentQuoteExlTax: IMoneyType;
  discountTotal: IMoneyType;
  grandTotalExlTax: IMoneyType;
  grandTotalInclTax: IMoneyType;
  originalSubTotalExlTax: IMoneyType;
  shippingTotal: IMoneyType;
  subTotalExlTax: IMoneyType;
  taxTotal: IMoneyType;
}

export interface IQuoteType {
  __typename?: 'QuoteType';
  addresses: Array<IQuoteAddressType>;
  attachments: Array<IQuoteAttachmentType>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  cancelledDate?: Maybe<Scalars['DateTime']['output']>;
  channelId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  coupon?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  currency: ICurrencyType;
  customerId?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  /** Quote dynamic property values */
  dynamicProperties: Array<IDynamicPropertyValueType>;
  employeeId?: Maybe<Scalars['String']['output']>;
  employeeName?: Maybe<Scalars['String']['output']>;
  enableNotification: Scalars['Boolean']['output'];
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  innerComment?: Maybe<Scalars['String']['output']>;
  isAnonymous: Scalars['Boolean']['output'];
  isCancelled: Scalars['Boolean']['output'];
  isLocked: Scalars['Boolean']['output'];
  items: Array<IQuoteItemType>;
  languageCode?: Maybe<Scalars['String']['output']>;
  manualRelDiscountAmount: IMoneyType;
  manualShippingTotal: IMoneyType;
  manualSubTotal: IMoneyType;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  number: Scalars['String']['output'];
  objectType?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  reminderDate?: Maybe<Scalars['DateTime']['output']>;
  shipmentMethod?: Maybe<IQuoteShipmentMethodType>;
  status?: Maybe<Scalars['String']['output']>;
  storeId: Scalars['String']['output'];
  tag?: Maybe<Scalars['String']['output']>;
  taxDetails: Array<IQuoteTaxDetailType>;
  totals: IQuoteTotalsType;
}


export interface IQuoteTypeDynamicPropertiesArgs {
  cultureName?: InputMaybe<Scalars['String']['input']>;
}

export interface IRangeFacet extends IFacet {
  __typename?: 'RangeFacet';
  /** The three types of facets. Terms, Range, Filter */
  facetType: FacetTypes;
  /** Localized name of the facet. */
  label: Scalars['String']['output'];
  /** The key/name  of the facet. */
  name: Scalars['String']['output'];
  /** Display order of the facet. */
  order?: Maybe<Scalars['Int']['output']>;
  /** Ranges */
  ranges: Array<IFacetRangeType>;
  /** Statistics for the facet, such as min and max values across ranges. */
  statistics?: Maybe<IRangeFacetStatistics>;
}

export interface IRangeFacetStatistics {
  __typename?: 'RangeFacetStatistics';
  /** The maximum value in the range or across ranges. */
  max?: Maybe<Scalars['Float']['output']>;
  /** The minimum value in the range or across ranges. */
  min?: Maybe<Scalars['Float']['output']>;
}

export interface IRating {
  __typename?: 'Rating';
  /** Total count of customer reviews */
  reviewCount: Scalars['Int']['output'];
  /** Average rating */
  value: Scalars['Decimal']['output'];
}

export interface IRefreshCartType {
  cartId?: InputMaybe<Scalars['String']['input']>;
  cartName?: InputMaybe<Scalars['String']['input']>;
  cartType?: InputMaybe<Scalars['String']['input']>;
  cultureName?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}

export interface IRegisterAccountType {
  __typename?: 'RegisterAccountType';
  createdBy?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
}

export interface IRegisterContactType {
  __typename?: 'RegisterContactType';
  about?: Maybe<Scalars['String']['output']>;
  address?: Maybe<IMemberAddressType>;
  birthdate?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  /** Contact's dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<IDynamicPropertyValueType>>>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
}

export interface IRegisterOrganizationType {
  __typename?: 'RegisterOrganizationType';
  /**
   * Returns first organization address.
   * @deprecated Use addresses field instead.
   */
  address?: Maybe<IMemberAddressType>;
  /** Organization's addresses */
  addresses?: Maybe<Array<Maybe<IMemberAddressType>>>;
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Contact's dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<IDynamicPropertyValueType>>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerId?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
}

export interface IRegistrationErrorType {
  __typename?: 'RegistrationErrorType';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  parameter?: Maybe<Scalars['String']['output']>;
}

export interface IRejectTaskCommandType {
  id: Scalars['String']['input'];
}

export interface IRemoveAddressFromFavoritesCommandType {
  addressId: Scalars['String']['input'];
}

export interface IRemoveQuoteItemCommandType {
  lineItemId: Scalars['String']['input'];
  quoteId: Scalars['String']['input'];
}

export interface IRequestRegistrationType {
  __typename?: 'RequestRegistrationType';
  /** Contact's account */
  account?: Maybe<IRegisterAccountType>;
  /** Created contact */
  contact?: Maybe<IRegisterContactType>;
  /** Created company */
  organization?: Maybe<IRegisterOrganizationType>;
  /** Account creation result */
  result?: Maybe<IAccountCreationResultType>;
}

export interface IReviewValidationErrorType {
  __typename?: 'ReviewValidationErrorType';
  /** Error code */
  errorCode?: Maybe<Scalars['String']['output']>;
  /** Error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
}

export interface IRoleType {
  __typename?: 'RoleType';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  /** Permissions in Role */
  permissions: Array<Maybe<Scalars['String']['output']>>;
}

export interface ISearchHistoryResultType {
  __typename?: 'SearchHistoryResultType';
  queries?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

/** Represents a range value in a product search filter */
export interface ISearchProductFilterRangeValue {
  __typename?: 'SearchProductFilterRangeValue';
  /** Indicates if the starting bound is included in the range */
  includeLowerBound: Scalars['Boolean']['output'];
  /** Indicates if the ending bound is included in the range */
  includeUpperBound: Scalars['Boolean']['output'];
  /** The starting value of the range */
  lower?: Maybe<Scalars['String']['output']>;
  /** The ending value of the range */
  upper?: Maybe<Scalars['String']['output']>;
}

/** Represents a filter result for product search */
export interface ISearchProductFilterResult {
  __typename?: 'SearchProductFilterResult';
  /** The type of the filter, e.g., 'term' or 'range' */
  filterType: Scalars['String']['output'];
  /** Indicates whether the filter was generated automatically */
  isGenerated: Scalars['Boolean']['output'];
  /** Localized name of the filter (if available) */
  label?: Maybe<Scalars['String']['output']>;
  /** The name of the filter */
  name: Scalars['String']['output'];
  /** List of range values in the filter */
  rangeValues?: Maybe<Array<Maybe<ISearchProductFilterRangeValue>>>;
  /** List of term values in the filter */
  termValues?: Maybe<Array<Maybe<ISearchProductFilterValue>>>;
}

/** Represents a term value in a product search filter */
export interface ISearchProductFilterValue {
  __typename?: 'SearchProductFilterValue';
  /** The label of the term in the filter, used for display purposes */
  label?: Maybe<Scalars['String']['output']>;
  /** The value of the term in the filter */
  value: Scalars['String']['output'];
}

export interface ISendPasswordResetEmailCommandType {
  cultureName?: InputMaybe<Scalars['String']['input']>;
  loginOrEmail: Scalars['String']['input'];
  storeId?: InputMaybe<Scalars['String']['input']>;
  urlSuffix?: InputMaybe<Scalars['String']['input']>;
}

export interface ISeoInfo {
  __typename?: 'SeoInfo';
  id: Scalars['String']['output'];
  imageAltDescription?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  languageCode?: Maybe<Scalars['String']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  objectId: Scalars['String']['output'];
  objectType: Scalars['String']['output'];
  outline?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  semanticUrl: Scalars['String']['output'];
  storeId?: Maybe<Scalars['String']['output']>;
}

export interface ISharingSettingType {
  __typename?: 'SharingSettingType';
  /** Access (read or write) */
  access?: Maybe<WishlistAccessType>;
  /** Id (sharing key) */
  id: Scalars['String']['output'];
  /** Created by current user */
  isOwner: Scalars['Boolean']['output'];
  /** Scope (private, organization, etc.) */
  scope?: Maybe<WishlistScopeType>;
}

export interface IShipmentType {
  __typename?: 'ShipmentType';
  /** Text comment */
  comment?: Maybe<Scalars['String']['output']>;
  /** Currency */
  currency: ICurrencyType;
  /** Delivery address */
  deliveryAddress?: Maybe<ICartAddressType>;
  /** Discount amount */
  discountAmount: IMoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: IMoneyType;
  /** Discounts */
  discounts: Array<IDiscountType>;
  /** Cart shipment dynamic property values */
  dynamicProperties: Array<IDynamicPropertyValueType>;
  /** Fee */
  fee: IMoneyType;
  /** Fee with tax */
  feeWithTax: IMoneyType;
  /** Fulfillment center id */
  fulfillmentCenterId?: Maybe<Scalars['String']['output']>;
  /** Value of height */
  height?: Maybe<Scalars['Decimal']['output']>;
  /** Shipment Id */
  id: Scalars['String']['output'];
  /** Items */
  items: Array<ICartShipmentItemType>;
  /** Value of length */
  length?: Maybe<Scalars['Decimal']['output']>;
  /** Value of measurement units */
  measureUnit?: Maybe<Scalars['String']['output']>;
  pickupLocation?: Maybe<IPickupLocationType>;
  /** Price */
  price: IMoneyType;
  /** Price with tax */
  priceWithTax: IMoneyType;
  /** Shipment method code */
  shipmentMethodCode?: Maybe<Scalars['String']['output']>;
  /** Shipment method option */
  shipmentMethodOption?: Maybe<Scalars['String']['output']>;
  shippingMethod?: Maybe<IShippingMethodType>;
  /** Tax details */
  taxDetails: Array<ITaxDetailType>;
  /** Tax percent rate */
  taxPercentRate: Scalars['Decimal']['output'];
  /** Tax total */
  taxTotal: IMoneyType;
  /** Tax type */
  taxType?: Maybe<Scalars['String']['output']>;
  /** Total */
  total: IMoneyType;
  /** Total with tax */
  totalWithTax: IMoneyType;
  vendor?: Maybe<ICommonVendor>;
  /** Value of volumetric weight */
  volumetricWeight?: Maybe<Scalars['Decimal']['output']>;
  /** Value of weight */
  weight?: Maybe<Scalars['Decimal']['output']>;
  /** Value of weight unit */
  weightUnit?: Maybe<Scalars['String']['output']>;
  /** Value of width */
  width?: Maybe<Scalars['Decimal']['output']>;
}

export interface IShippingMethodType {
  __typename?: 'ShippingMethodType';
  /** Value of shipping gateway code */
  code: Scalars['String']['output'];
  /** Currency */
  currency: ICurrencyType;
  /** Shipping method description */
  description?: Maybe<Scalars['String']['output']>;
  /** Discount amount */
  discountAmount: IMoneyType;
  /** Discount amount with tax */
  discountAmountWithTax: IMoneyType;
  id: Scalars['String']['output'];
  /** Value of shipping method logo absolute URL */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** Shipping method name */
  name?: Maybe<Scalars['String']['output']>;
  /** Value of shipping method option description */
  optionDescription?: Maybe<Scalars['String']['output']>;
  /** Value of shipping method option name */
  optionName?: Maybe<Scalars['String']['output']>;
  /** Price */
  price: IMoneyType;
  /** Price with tax */
  priceWithTax: IMoneyType;
  /** Value of shipping method priority */
  priority: Scalars['Int']['output'];
  /** Total */
  total: IMoneyType;
  /** Total with tax */
  totalWithTax: IMoneyType;
}

export interface ISkyflowCardResponseType {
  __typename?: 'SkyflowCardResponseType';
  cards?: Maybe<Array<Maybe<ISkyflowCardType>>>;
}

export interface ISkyflowCardType {
  __typename?: 'SkyflowCardType';
  active: Scalars['Boolean']['output'];
  cardExpiration?: Maybe<Scalars['String']['output']>;
  cardNumber: Scalars['String']['output'];
  cardholderName?: Maybe<Scalars['String']['output']>;
  cvv?: Maybe<Scalars['String']['output']>;
  expiryMonth?: Maybe<Scalars['String']['output']>;
  expiryYear?: Maybe<Scalars['String']['output']>;
  skyflowId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
}

export interface ISlugInfoResponseType {
  __typename?: 'SlugInfoResponseType';
  /** SEO info */
  entityInfo?: Maybe<ISeoInfo>;
  /** Target URL when SEO is null */
  redirectUrl?: Maybe<Scalars['String']['output']>;
}

export interface IStoreResponseType {
  __typename?: 'StoreResponseType';
  /** Available currencies */
  availableCurrencies: Array<ICurrencyType>;
  /** Available languages */
  availableLanguages: Array<ILanguageType>;
  /** Store catalog ID */
  catalogId: Scalars['String']['output'];
  /** Currency */
  defaultCurrency: ICurrencyType;
  /** Language */
  defaultLanguage: ILanguageType;
  /** Store dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<IDynamicPropertyValueType>>>;
  /** GraphQL settings */
  graphQLSettings: IGraphQlSettingsType;
  /** Store settings */
  settings: IStoreSettingsType;
  /** Store ID */
  storeId: Scalars['String']['output'];
  /** Store name */
  storeName: Scalars['String']['output'];
  /** Store URL */
  storeUrl?: Maybe<Scalars['String']['output']>;
}

export interface IStoreSettingsType {
  __typename?: 'StoreSettingsType';
  /** Allow anonymous users to visit the store  */
  anonymousUsersAllowed: Scalars['Boolean']['output'];
  authenticationTypes: Array<Maybe<Scalars['String']['output']>>;
  /**
   * Allow anonymous users to create orders (XAPI)
   * @deprecated Use XOrder.CreateAnonymousOrderEnabled public property instead.
   */
  createAnonymousOrderEnabled: Scalars['Boolean']['output'];
  /**
   * Default "Selected for checkout" state for new line items and gifts
   * @deprecated Use XPurchase.IsSelectedForCheckout public property instead.
   */
  defaultSelectedForCheckout: Scalars['Boolean']['output'];
  /** Email address verification enabled */
  emailVerificationEnabled: Scalars['Boolean']['output'];
  /** Email address verification required */
  emailVerificationRequired: Scalars['Boolean']['output'];
  /** Environment name */
  environmentName: Scalars['String']['output'];
  /**
   * SPA
   * @deprecated Client application should use own business logic for SPA detection.
   */
  isSpa: Scalars['Boolean']['output'];
  modules: Array<IModuleSettingsType>;
  /** Password requirements */
  passwordRequirements?: Maybe<IPasswordOptionsType>;
  /**
   * Quotes enabled
   * @deprecated Use Quotes.EnableQuotes public property instead.
   */
  quotesEnabled: Scalars['Boolean']['output'];
  /** SEO links */
  seoLinkType: Scalars['String']['output'];
  /**
   * Subscription enabled
   * @deprecated Use Subscription.EnableSubscriptions public property instead.
   */
  subscriptionEnabled: Scalars['Boolean']['output'];
  /** Tax calculation enabled */
  taxCalculationEnabled: Scalars['Boolean']['output'];
}

export interface ISubmitQuoteCommandType {
  comment: Scalars['String']['input'];
  quoteId: Scalars['String']['input'];
}

export interface ISubscriptions {
  __typename?: 'Subscriptions';
  ping?: Maybe<Scalars['String']['output']>;
  pushMessageCreated: IPushMessageType;
}

export interface ITaxDetailType {
  __typename?: 'TaxDetailType';
  /** Amount */
  amount: IMoneyType;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Price */
  price: IMoneyType;
  /** Rate */
  rate: IMoneyType;
}

export interface ITermFacet extends IFacet {
  __typename?: 'TermFacet';
  /** Three facet types: Terms, Range, and Filter */
  facetType: FacetTypes;
  /** Localized name of the facet. */
  label: Scalars['String']['output'];
  /** The key/name  of the facet. */
  name: Scalars['String']['output'];
  /** Display order of the facet. */
  order?: Maybe<Scalars['Int']['output']>;
  /** Terms */
  terms: Array<IFacetTermType>;
}

export interface ITierPriceType {
  __typename?: 'TierPriceType';
  /** Price */
  price: IMoneyType;
  /** Price with tax */
  priceWithTax: IMoneyType;
  /** Quantity */
  quantity: Scalars['Long']['output'];
}

export interface IUpdateQuoteAddressesCommandType {
  addresses: Array<InputMaybe<IInputQuoteAddressType>>;
  quoteId: Scalars['String']['input'];
}

export interface IUpdateQuoteAttachmentsCommandType {
  quoteId: Scalars['String']['input'];
  urls: Array<InputMaybe<Scalars['String']['input']>>;
}

export interface IUpdateQuoteDynamicPropertiesCommandType {
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<IInputDynamicPropertyValueType>>;
  quoteId: Scalars['String']['input'];
}

export interface IUserType {
  __typename?: 'UserType';
  accessFailedCount: Scalars['Int']['output'];
  /** The associated contact info */
  contact?: Maybe<IContactType>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmed: Scalars['Boolean']['output'];
  /** Make this user change their password when they sign in next time */
  forcePasswordChange?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  isAdministrator: Scalars['Boolean']['output'];
  /** Account locked state */
  lockedState?: Maybe<Scalars['Boolean']['output']>;
  lockoutEnabled: Scalars['Boolean']['output'];
  lockoutEnd?: Maybe<Scalars['DateTime']['output']>;
  memberId?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  normalizedEmail?: Maybe<Scalars['String']['output']>;
  normalizedUserName?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<IUserType>;
  passwordExpired: Scalars['Boolean']['output'];
  /** Password expiry in days */
  passwordExpiryInDays?: Maybe<Scalars['Int']['output']>;
  /** Account permissions */
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberConfirmed: Scalars['Boolean']['output'];
  photoUrl?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<IRoleType>>>;
  securityStamp: Scalars['String']['output'];
  storeId?: Maybe<Scalars['String']['output']>;
  twoFactorEnabled: Scalars['Boolean']['output'];
  userName: Scalars['String']['output'];
  userType?: Maybe<Scalars['String']['output']>;
}

export interface IValidationErrorType {
  __typename?: 'ValidationErrorType';
  /** Error code */
  errorCode?: Maybe<Scalars['String']['output']>;
  /** Error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  errorParameters?: Maybe<Array<Maybe<IErrorParameterType>>>;
  /** Object id */
  objectId?: Maybe<Scalars['String']['output']>;
  /** Object type */
  objectType?: Maybe<Scalars['String']['output']>;
}

export interface IVariationType {
  __typename?: 'VariationType';
  /** Assets */
  assets: Array<IAsset>;
  /** Availability data */
  availabilityData: IAvailabilityData;
  /** SKU of variation. */
  code: Scalars['String']['output'];
  /** Id of variation. */
  id: Scalars['String']['output'];
  /** Product images */
  images: Array<IImageType>;
  /** Max. quantity. */
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  /** Min. quantity. */
  minQuantity?: Maybe<Scalars['Int']['output']>;
  /** Name of variation. */
  name: Scalars['String']['output'];
  /** Outlines */
  outlines?: Maybe<Array<IOutlineType>>;
  /** Defines the number of items in a package. Quantity step for your product's. */
  packSize?: Maybe<Scalars['Int']['output']>;
  /** Product price */
  price: IPriceType;
  /** Product prices */
  prices: Array<IPriceType>;
  /** The type of product */
  productType?: Maybe<Scalars['String']['output']>;
  properties: Array<IProperty>;
  /** Product rating */
  rating?: Maybe<IRating>;
  /** Request related slug for product */
  slug?: Maybe<Scalars['String']['output']>;
  /** Product vendor */
  vendor?: Maybe<ICommonVendor>;
}

/** Vendor Info */
export interface IVendor {
  __typename?: 'Vendor';
  /** About vendor */
  about?: Maybe<Scalars['String']['output']>;
  addresses?: Maybe<IMemberAddressConnection>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<IMemberAddressType>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<IMemberAddressType>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<IDynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']['output']>>;
  groups: Array<Maybe<Scalars['String']['output']>>;
  /** Icon URL */
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** Member type */
  memberType: Scalars['String']['output'];
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']['output']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']['output']>>;
  /** Vendor rating */
  rating?: Maybe<IRating>;
  /** Request related SEO info */
  seoInfo?: Maybe<ISeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String']['output'];
  /** Site URL */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** Status */
  status?: Maybe<Scalars['String']['output']>;
}


/** Vendor Info */
export interface IVendorAddressesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}


/** Vendor Info */
export interface IVendorRatingArgs {
  storeId?: InputMaybe<Scalars['String']['input']>;
}


/** Vendor Info */
export interface IVendorSeoInfoArgs {
  cultureName: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
}

/** A connection from an object to a list of objects of type `Video`. */
export interface IVideoConnection {
  __typename?: 'VideoConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IVideoEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IVideoType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `Video`. */
export interface IVideoEdge {
  __typename?: 'VideoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IVideoType>;
}

export interface IVideoType {
  __typename?: 'VideoType';
  /** Video URL */
  contentUrl: Scalars['String']['output'];
  /** Culture name */
  cultureName?: Maybe<Scalars['String']['output']>;
  /** Video description */
  description: Scalars['String']['output'];
  /** Video duration */
  duration?: Maybe<Scalars['String']['output']>;
  /** Embedded video URL */
  embedUrl?: Maybe<Scalars['String']['output']>;
  /** Video name */
  name: Scalars['String']['output'];
  /** ID of the object video is attached to */
  ownerId: Scalars['String']['output'];
  /** Type of the object video is attached to (Product, Category) */
  ownerType: Scalars['String']['output'];
  /** Sort order */
  sortOrder: Scalars['Int']['output'];
  /** Video thumbnail URL */
  thumbnailUrl: Scalars['String']['output'];
  /** Video upload date */
  uploadDate?: Maybe<Scalars['DateTime']['output']>;
}

export interface IWhiteLabelingSettingsType {
  __typename?: 'WhiteLabelingSettingsType';
  /** Master favicon URL */
  faviconUrl?: Maybe<Scalars['String']['output']>;
  favicons?: Maybe<Array<Maybe<IFaviconType>>>;
  footerLinks?: Maybe<Array<Maybe<IMenuLinkType>>>;
  /** If true then FaviconUrl contains Organization favicon */
  isOrganizationFaviconUploaded?: Maybe<Scalars['Boolean']['output']>;
  /** If true then LogoUrl contains Organization logo */
  isOrganizationLogoUploaded?: Maybe<Scalars['Boolean']['output']>;
  /** If true then SecondaryLogoUrl contains Organization logo */
  isOrganizationSecondaryLogoUploaded?: Maybe<Scalars['Boolean']['output']>;
  /** Logo URL */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** Organization ID */
  organizationId?: Maybe<Scalars['String']['output']>;
  /** Logo URL for footer */
  secondaryLogoUrl?: Maybe<Scalars['String']['output']>;
  /** Store ID */
  storeId?: Maybe<Scalars['String']['output']>;
  /** Theme preset name */
  themePresetName?: Maybe<Scalars['String']['output']>;
  /** User ID */
  userId?: Maybe<Scalars['String']['output']>;
}

export enum WishlistAccessType {
  /** Readonly access */
  Read = 'Read',
  /** Write access */
  Write = 'Write'
}

/** A connection from an object to a list of objects of type `Wishlist`. */
export interface IWishlistConnection {
  __typename?: 'WishlistConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IWishlistEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IWishlistType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `Wishlist`. */
export interface IWishlistEdge {
  __typename?: 'WishlistEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IWishlistType>;
}

export enum WishlistScopeType {
  /** Anyone (anonymous) scope */
  AnyoneAnonymous = 'AnyoneAnonymous',
  /** Anyone (authorized) scope */
  AnyoneAuthorized = 'AnyoneAuthorized',
  /** Organization scope */
  Organization = 'Organization',
  /** Private scope */
  Private = 'Private',
  /** User scope */
  User = 'User'
}

export interface IWishlistType {
  __typename?: 'WishlistType';
  /** Currency */
  currency?: Maybe<ICurrencyType>;
  /** Shopping cart user ID */
  customerId?: Maybe<Scalars['String']['output']>;
  /** Shopping cart user name */
  customerName?: Maybe<Scalars['String']['output']>;
  /** Wishlist description */
  description?: Maybe<Scalars['String']['output']>;
  /** Shopping cart ID */
  id: Scalars['String']['output'];
  /** Items */
  items?: Maybe<Array<Maybe<ILineItemType>>>;
  /** Item count */
  itemsCount?: Maybe<Scalars['Int']['output']>;
  /** Wishlist modified date */
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  /** Shopping cart name */
  name: Scalars['String']['output'];
  /**
   * Wishlist scope
   * @deprecated Use SharingSetting.Scope instead
   */
  scope?: Maybe<WishlistScopeType>;
  /** Sharing settings */
  sharingSetting?: Maybe<ISharingSettingType>;
  /** Shopping cart store ID */
  storeId?: Maybe<Scalars['String']['output']>;
  /** Wishlist subtotal */
  subTotal: IMoneyType;
}

/** A connection from an object to a list of objects of type `WorkTask`. */
export interface IWorkTaskConnection {
  __typename?: 'WorkTaskConnection';
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<IWorkTaskEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<IWorkTaskType>>>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']['output']>;
}

/** An edge in a connection from an object to another object of type `WorkTask`. */
export interface IWorkTaskEdge {
  __typename?: 'WorkTaskEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IWorkTaskType>;
}

export interface IWorkTaskType {
  __typename?: 'WorkTaskType';
  completed?: Maybe<Scalars['Boolean']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  parameters?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  responsibleName?: Maybe<Scalars['String']['output']>;
  storeId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  workflowId?: Maybe<Scalars['String']['output']>;
}

export type IApproveOrderMutationVariables = Exact<{
  command: IInputApproveCustomerOrderCommand;
}>;


export type IApproveOrderMutation = { __typename?: 'Mutations', approveOrder?: { __typename?: 'DemoCustomerOrderType', id: string, isApproved: boolean, status: string, storeId: string } | null };

export type IOrderDetailsFragment = { __typename?: 'DemoCustomerOrderType', id: string, isApproved: boolean, status: string, storeId: string };

export type IPendingForApprovalQueryVariables = Exact<{
  approverId: Scalars['String']['input'];
}>;


export type IPendingForApprovalQuery = { __typename?: 'Query', pendingForApprovals?: { __typename?: 'DemoCustomerOrderConnection', totalCount?: number | null, items?: Array<{ __typename?: 'DemoCustomerOrderType', id: string, isApproved: boolean, status: string, storeId: string } | null> | null } | null };

export type IRejectOrderMutationVariables = Exact<{
  command: IInputRejectCustomerOrderCommand;
}>;


export type IRejectOrderMutation = { __typename?: 'Mutations', rejectOrder?: { __typename?: 'DemoCustomerOrderType', id: string, isApproved: boolean, status: string, storeId: string } | null };

export const OrderDetailsFragmentDoc = gql`
    fragment OrderDetails on DemoCustomerOrderType {
  id
  isApproved
  status
  storeId
}
    `;
export const ApproveOrderDocument = gql`
    mutation ApproveOrder($command: InputApproveCustomerOrderCommand!) {
  approveOrder(command: $command) {
    ...OrderDetails
  }
}
    ${OrderDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class IApproveOrderGQL extends Apollo.Mutation<IApproveOrderMutation, IApproveOrderMutationVariables> {
    override document = ApproveOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PendingForApprovalDocument = gql`
    query PendingForApproval($approverId: String!) {
  pendingForApprovals(approverId: $approverId) {
    totalCount
    items {
      ...OrderDetails
    }
  }
}
    ${OrderDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class IPendingForApprovalGQL extends Apollo.Query<IPendingForApprovalQuery, IPendingForApprovalQueryVariables> {
    override document = PendingForApprovalDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RejectOrderDocument = gql`
    mutation RejectOrder($command: InputRejectCustomerOrderCommand!) {
  rejectOrder(command: $command) {
    ...OrderDetails
  }
}
    ${OrderDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class IRejectOrderGQL extends Apollo.Mutation<IRejectOrderMutation, IRejectOrderMutationVariables> {
    override document = RejectOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }