const apiVersion = 'infra.karolsz.com/v1alpha1';
const kind = 'xCell';

export const manifest = (props: XCell) => {
  return {
    apiVersion,
    kind,
    metadata: props.metadata,
    spec: props.spec,
  }
}

/**
 * @schema XCell
 */
export interface XCell {
  /**
   * @schema XCell#metadata
   */
  readonly metadata?: XCellMetadata;

  /**
   * @schema XCell#spec
   */
  readonly spec: XCellSpec;

  /**
   * @schema XCell#status
   */
  readonly status?: XCellStatus;

}

/**
 * Converts an object of type 'XCell' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCell(obj: XCell | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': toJson_XCellMetadata(obj.metadata),
    'spec': toJson_XCellSpec(obj.spec),
    'status': toJson_XCellStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellMetadata
 */
export interface XCellMetadata {
  /**
   * @schema XCellMetadata#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'XCellMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellMetadata(obj: XCellMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellSpec
 */
export interface XCellSpec {
  /**
   * @schema XCellSpec#account
   */
  readonly account: string;

  /**
   * @schema XCellSpec#claimRef
   */
  readonly claimRef?: XCellSpecClaimRef;

  /**
   * @schema XCellSpec#compositionRef
   */
  readonly compositionRef?: XCellSpecCompositionRef;

  /**
   * @schema XCellSpec#compositionRevisionRef
   */
  readonly compositionRevisionRef?: XCellSpecCompositionRevisionRef;

  /**
   * @schema XCellSpec#compositionRevisionSelector
   */
  readonly compositionRevisionSelector?: XCellSpecCompositionRevisionSelector;

  /**
   * @schema XCellSpec#compositionSelector
   */
  readonly compositionSelector?: XCellSpecCompositionSelector;

  /**
   * @schema XCellSpec#compositionUpdatePolicy
   */
  readonly compositionUpdatePolicy?: XCellSpecCompositionUpdatePolicy;

  /**
   * @schema XCellSpec#publishConnectionDetailsTo
   */
  readonly publishConnectionDetailsTo?: XCellSpecPublishConnectionDetailsTo;

  /**
   * @schema XCellSpec#region
   */
  readonly region: string;

  /**
   * @schema XCellSpec#resourceRefs
   */
  readonly resourceRefs?: XCellSpecResourceRefs[];

  /**
   * @schema XCellSpec#size
   */
  readonly size: string;

  /**
   * @schema XCellSpec#writeConnectionSecretToRef
   */
  readonly writeConnectionSecretToRef?: XCellSpecWriteConnectionSecretToRef;

}

/**
 * Converts an object of type 'XCellSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellSpec(obj: XCellSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'account': obj.account,
    'claimRef': toJson_XCellSpecClaimRef(obj.claimRef),
    'compositionRef': toJson_XCellSpecCompositionRef(obj.compositionRef),
    'compositionRevisionRef': toJson_XCellSpecCompositionRevisionRef(obj.compositionRevisionRef),
    'compositionRevisionSelector': toJson_XCellSpecCompositionRevisionSelector(obj.compositionRevisionSelector),
    'compositionSelector': toJson_XCellSpecCompositionSelector(obj.compositionSelector),
    'compositionUpdatePolicy': obj.compositionUpdatePolicy,
    'publishConnectionDetailsTo': toJson_XCellSpecPublishConnectionDetailsTo(obj.publishConnectionDetailsTo),
    'region': obj.region,
    'resourceRefs': obj.resourceRefs?.map(y => toJson_XCellSpecResourceRefs(y)),
    'size': obj.size,
    'writeConnectionSecretToRef': toJson_XCellSpecWriteConnectionSecretToRef(obj.writeConnectionSecretToRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellStatus
 */
export interface XCellStatus {
  /**
   * @schema XCellStatus#claimConditionTypes
   */
  readonly claimConditionTypes?: string[];

  /**
   * Conditions of the resource.
   *
   * @schema XCellStatus#conditions
   */
  readonly conditions?: XCellStatusConditions[];

  /**
   * @schema XCellStatus#connectionDetails
   */
  readonly connectionDetails?: XCellStatusConnectionDetails;

}

/**
 * Converts an object of type 'XCellStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellStatus(obj: XCellStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'claimConditionTypes': obj.claimConditionTypes?.map(y => y),
    'conditions': obj.conditions?.map(y => toJson_XCellStatusConditions(y)),
    'connectionDetails': toJson_XCellStatusConnectionDetails(obj.connectionDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellSpecClaimRef
 */
export interface XCellSpecClaimRef {
  /**
   * @schema XCellSpecClaimRef#apiVersion
   */
  readonly apiVersion: string;

  /**
   * @schema XCellSpecClaimRef#kind
   */
  readonly kind: string;

  /**
   * @schema XCellSpecClaimRef#name
   */
  readonly name: string;

  /**
   * @schema XCellSpecClaimRef#namespace
   */
  readonly namespace: string;

}

/**
 * Converts an object of type 'XCellSpecClaimRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellSpecClaimRef(obj: XCellSpecClaimRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiVersion': obj.apiVersion,
    'kind': obj.kind,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellSpecCompositionRef
 */
export interface XCellSpecCompositionRef {
  /**
   * @schema XCellSpecCompositionRef#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'XCellSpecCompositionRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellSpecCompositionRef(obj: XCellSpecCompositionRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellSpecCompositionRevisionRef
 */
export interface XCellSpecCompositionRevisionRef {
  /**
   * @schema XCellSpecCompositionRevisionRef#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'XCellSpecCompositionRevisionRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellSpecCompositionRevisionRef(obj: XCellSpecCompositionRevisionRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellSpecCompositionRevisionSelector
 */
export interface XCellSpecCompositionRevisionSelector {
  /**
   * @schema XCellSpecCompositionRevisionSelector#matchLabels
   */
  readonly matchLabels: { [key: string]: string };

}

/**
 * Converts an object of type 'XCellSpecCompositionRevisionSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellSpecCompositionRevisionSelector(obj: XCellSpecCompositionRevisionSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchLabels': ((obj.matchLabels) === undefined) ? undefined : (Object.entries(obj.matchLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellSpecCompositionSelector
 */
export interface XCellSpecCompositionSelector {
  /**
   * @schema XCellSpecCompositionSelector#matchLabels
   */
  readonly matchLabels: { [key: string]: string };

}

/**
 * Converts an object of type 'XCellSpecCompositionSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellSpecCompositionSelector(obj: XCellSpecCompositionSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchLabels': ((obj.matchLabels) === undefined) ? undefined : (Object.entries(obj.matchLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellSpecCompositionUpdatePolicy
 */
export enum XCellSpecCompositionUpdatePolicy {
  /** Automatic */
  AUTOMATIC = "Automatic",
  /** Manual */
  MANUAL = "Manual",
}

/**
 * @schema XCellSpecPublishConnectionDetailsTo
 */
export interface XCellSpecPublishConnectionDetailsTo {
  /**
   * @schema XCellSpecPublishConnectionDetailsTo#configRef
   */
  readonly configRef?: XCellSpecPublishConnectionDetailsToConfigRef;

  /**
   * @schema XCellSpecPublishConnectionDetailsTo#metadata
   */
  readonly metadata?: XCellSpecPublishConnectionDetailsToMetadata;

  /**
   * @schema XCellSpecPublishConnectionDetailsTo#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'XCellSpecPublishConnectionDetailsTo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellSpecPublishConnectionDetailsTo(obj: XCellSpecPublishConnectionDetailsTo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configRef': toJson_XCellSpecPublishConnectionDetailsToConfigRef(obj.configRef),
    'metadata': toJson_XCellSpecPublishConnectionDetailsToMetadata(obj.metadata),
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellSpecResourceRefs
 */
export interface XCellSpecResourceRefs {
  /**
   * @schema XCellSpecResourceRefs#apiVersion
   */
  readonly apiVersion: string;

  /**
   * @schema XCellSpecResourceRefs#kind
   */
  readonly kind: string;

  /**
   * @schema XCellSpecResourceRefs#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'XCellSpecResourceRefs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellSpecResourceRefs(obj: XCellSpecResourceRefs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiVersion': obj.apiVersion,
    'kind': obj.kind,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellSpecWriteConnectionSecretToRef
 */
export interface XCellSpecWriteConnectionSecretToRef {
  /**
   * @schema XCellSpecWriteConnectionSecretToRef#name
   */
  readonly name: string;

  /**
   * @schema XCellSpecWriteConnectionSecretToRef#namespace
   */
  readonly namespace: string;

}

/**
 * Converts an object of type 'XCellSpecWriteConnectionSecretToRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellSpecWriteConnectionSecretToRef(obj: XCellSpecWriteConnectionSecretToRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellStatusConditions
 */
export interface XCellStatusConditions {
  /**
   * @schema XCellStatusConditions#lastTransitionTime
   */
  readonly lastTransitionTime: Date;

  /**
   * @schema XCellStatusConditions#message
   */
  readonly message?: string;

  /**
   * @schema XCellStatusConditions#reason
   */
  readonly reason: string;

  /**
   * @schema XCellStatusConditions#status
   */
  readonly status: string;

  /**
   * @schema XCellStatusConditions#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'XCellStatusConditions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellStatusConditions(obj: XCellStatusConditions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lastTransitionTime': obj.lastTransitionTime?.toISOString(),
    'message': obj.message,
    'reason': obj.reason,
    'status': obj.status,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellStatusConnectionDetails
 */
export interface XCellStatusConnectionDetails {
  /**
   * @schema XCellStatusConnectionDetails#lastPublishedTime
   */
  readonly lastPublishedTime?: Date;

}

/**
 * Converts an object of type 'XCellStatusConnectionDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellStatusConnectionDetails(obj: XCellStatusConnectionDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lastPublishedTime': obj.lastPublishedTime?.toISOString(),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellSpecPublishConnectionDetailsToConfigRef
 */
export interface XCellSpecPublishConnectionDetailsToConfigRef {
  /**
   * @schema XCellSpecPublishConnectionDetailsToConfigRef#name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'XCellSpecPublishConnectionDetailsToConfigRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellSpecPublishConnectionDetailsToConfigRef(obj: XCellSpecPublishConnectionDetailsToConfigRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema XCellSpecPublishConnectionDetailsToMetadata
 */
export interface XCellSpecPublishConnectionDetailsToMetadata {
  /**
   * @schema XCellSpecPublishConnectionDetailsToMetadata#annotations
   */
  readonly annotations?: { [key: string]: string };

  /**
   * @schema XCellSpecPublishConnectionDetailsToMetadata#labels
   */
  readonly labels?: { [key: string]: string };

  /**
   * @schema XCellSpecPublishConnectionDetailsToMetadata#type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'XCellSpecPublishConnectionDetailsToMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_XCellSpecPublishConnectionDetailsToMetadata(obj: XCellSpecPublishConnectionDetailsToMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'annotations': ((obj.annotations) === undefined) ? undefined : (Object.entries(obj.annotations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'labels': ((obj.labels) === undefined) ? undefined : (Object.entries(obj.labels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

