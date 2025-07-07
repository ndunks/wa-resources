__d(
  "WAWebMsgModel",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebAck",
    "WAWebApiContact",
    "WAWebBaseModel",
    "WAWebBizLabelUtils",
    "WAWebBotGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTypes",
    "WAWebBusinessHSMTypes",
    "WAWebBusinessProfileTypes",
    "WAWebCarouselCardsCollection",
    "WAWebChangePresenceHandlerAction",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebChatGetMessage",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebCommonMsgUtils",
    "WAWebConnModel",
    "WAWebConstantsDeprecated",
    "WAWebContactCollection",
    "WAWebDBUpdateMessageTable",
    "WAWebDirectConnectionGatingUtils",
    "WAWebEphemeralKeepInChatAbpropUtils",
    "WAWebEphemeralityTypes",
    "WAWebEventsWaitForBbEvent",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebLabelCollection",
    "WAWebLidMigrationUtils",
    "WAWebMedia",
    "WAWebMediaData",
    "WAWebMediaTypes",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModelPropUtils",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebMuteCollection",
    "WAWebNewsletterCollection",
    "WAWebNewsletterSendMsgAction",
    "WAWebNotificationsMsgNotification",
    "WAWebPinInChatCollection",
    "WAWebPromiseQueue",
    "WAWebSendMessageEditAction",
    "WAWebSendMsgRecordAction",
    "WAWebStarredMsgCollection",
    "WAWebSuspendedGroupMediaDownloadFailureModal.react",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebVcardParsingUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebViewOnceState",
    "WAWebWamEnumDisappearingChatInitiatorType",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "err",
    "fbs",
    "gkx",
    "isStringNullOrEmpty",
    "lodash",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    var h, i;
    function j() {
      var a = babelHelpers.taggedTemplateLiteralLoose(["error = ", ""]);
      j = function () {
        return a;
      };
      return a;
    }
    function k() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "updated ",
        " from ",
        " to ",
        "",
      ]);
      k = function () {
        return a;
      };
      return a;
    }
    function l() {
      var a = babelHelpers.taggedTemplateLiteralLoose(["id: ", " type: ", ""]);
      l = function () {
        return a;
      };
      return a;
    }
    function m() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "resumeUpload called while state was ",
        "",
      ]);
      m = function () {
        return a;
      };
      return a;
    }
    function n() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "Msg: _triggerNotificationForParentMessage: parentMsg for ",
        " not found in MsgCollection or not eligible for notification re-triggering",
      ]);
      n = function () {
        return a;
      };
      return a;
    }
    function o() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "Invalid timestamp value in msg, raw ts value: ",
        ", msgId: ",
        ", msgType: ",
        "_",
        "",
      ]);
      o = function () {
        return a;
      };
      return a;
    }
    var p = i || c("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e() {
        var b;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = a.call.apply(a, [this].concat(f)) || this),
          (b.id = d("WAWebBaseModel").prop()),
          (b.rowId = d("WAWebBaseModel").prop()),
          (b.serverId = d("WAWebBaseModel").prop()),
          (b.viewCount = d("WAWebBaseModel").prop()),
          (b.viewed = d("WAWebBaseModel").prop(!1)),
          (b.body = d("WAWebBaseModel").prop()),
          (b.type = d("WAWebBaseModel").prop()),
          (b.subtype = d("WAWebBaseModel").prop()),
          (b.t = d("WAWebBaseModel").prop()),
          (b.revokeTimestamp = d("WAWebBaseModel").prop()),
          (b.notifyName = d("WAWebBaseModel").prop()),
          (b.from = d("WAWebBaseModel").prop()),
          (b.to = d("WAWebBaseModel").prop()),
          (b.author = d("WAWebBaseModel").prop()),
          (b.ack = d("WAWebBaseModel").prop()),
          (b.invis = d("WAWebBaseModel").prop()),
          (b.isNewMsg = d("WAWebBaseModel").prop()),
          (b.star = d("WAWebBaseModel").prop(!1)),
          (b.kicKey = d("WAWebBaseModel").prop()),
          (b.kicState = d("WAWebBaseModel").prop()),
          (b.kicTimestampMs = d("WAWebBaseModel").prop()),
          (b.kicNotified = d("WAWebBaseModel").prop(!1)),
          (b.keepType = d("WAWebBaseModel").prop()),
          (b.keptMessageKey = d("WAWebBaseModel").prop()),
          (b.keptCount = d("WAWebBaseModel").prop()),
          (b.recvFresh = d("WAWebBaseModel").prop()),
          (b.caption = d("WAWebBaseModel").prop()),
          (b.interactiveAnnotations = d("WAWebBaseModel").prop()),
          (b.contextInfo = d("WAWebBaseModel").prop()),
          (b.clientUrl = d("WAWebBaseModel").prop()),
          (b.loc = d("WAWebBaseModel").prop()),
          (b.lat = d("WAWebBaseModel").prop()),
          (b.lng = d("WAWebBaseModel").prop()),
          (b.isLive = d("WAWebBaseModel").prop()),
          (b.accuracy = d("WAWebBaseModel").prop()),
          (b.speed = d("WAWebBaseModel").prop()),
          (b.degrees = d("WAWebBaseModel").prop()),
          (b.comment = d("WAWebBaseModel").prop()),
          (b.sequence = d("WAWebBaseModel").prop()),
          (b.shareDuration = d("WAWebBaseModel").prop()),
          (b.finalLat = d("WAWebBaseModel").prop()),
          (b.finalLng = d("WAWebBaseModel").prop()),
          (b.finalAccuracy = d("WAWebBaseModel").prop()),
          (b.finalThumbnail = d("WAWebBaseModel").prop()),
          (b.finalSpeed = d("WAWebBaseModel").prop()),
          (b.finalDegrees = d("WAWebBaseModel").prop()),
          (b.finalTimeOffset = d("WAWebBaseModel").prop()),
          (b.deprecatedMms3Url = d("WAWebBaseModel").prop()),
          (b.directPath = d("WAWebBaseModel").prop()),
          (b.mimetype = d("WAWebBaseModel").prop()),
          (b.duration = d("WAWebBaseModel").prop()),
          (b.filehash = d("WAWebBaseModel").prop()),
          (b.encFilehash = d("WAWebBaseModel").prop()),
          (b.size = d("WAWebBaseModel").prop()),
          (b.filename = d("WAWebBaseModel").prop()),
          (b.streamingSidecar = d("WAWebBaseModel").prop()),
          (b.mediaKey = d("WAWebBaseModel").prop()),
          (b.mediaKeyTimestamp = d("WAWebBaseModel").prop()),
          (b.pageCount = d("WAWebBaseModel").prop()),
          (b.isGif = d("WAWebBaseModel").prop()),
          (b.gifAttribution = d("WAWebBaseModel").prop()),
          (b.accessibilityLabel = d("WAWebBaseModel").prop()),
          (b.isViewOnce = d("WAWebBaseModel").prop()),
          (b.streamable = d("WAWebBaseModel").prop()),
          (b.width = d("WAWebBaseModel").prop()),
          (b.height = d("WAWebBaseModel").prop()),
          (b.thumbnailDirectPath = d("WAWebBaseModel").prop()),
          (b.thumbnailSha256 = d("WAWebBaseModel").prop()),
          (b.thumbnailEncSha256 = d("WAWebBaseModel").prop()),
          (b.thumbnailHeight = d("WAWebBaseModel").prop()),
          (b.thumbnailWidth = d("WAWebBaseModel").prop()),
          (b.waveform = d("WAWebBaseModel").prop()),
          (b.staticUrl = d("WAWebBaseModel").prop()),
          (b.stickerPackId = d("WAWebBaseModel").prop()),
          (b.stickerPackName = d("WAWebBaseModel").prop()),
          (b.stickerPackPublisher = d("WAWebBaseModel").prop()),
          (b.stickers = d("WAWebBaseModel").prop()),
          (b.trayIconFileName = d("WAWebBaseModel").prop()),
          (b.stickerPackSize = d("WAWebBaseModel").prop()),
          (b.mediaHandle = d("WAWebBaseModel").prop()),
          (b.scanLengths = d("WAWebBaseModel").prop()),
          (b.scansSidecar = d("WAWebBaseModel").prop()),
          (b.isFromTemplate = d("WAWebBaseModel").prop(!1)),
          (b.devicesAdded = d("WAWebBaseModel").prop()),
          (b.devicesRemoved = d("WAWebBaseModel").prop()),
          (b.isThisDeviceAdded = d("WAWebBaseModel").prop()),
          (b.firstFrameLength = d("WAWebBaseModel").prop()),
          (b.firstFrameSidecar = d("WAWebBaseModel").prop()),
          (b.isAnimated = d("WAWebBaseModel").prop()),
          (b.isLottie = d("WAWebBaseModel").prop()),
          (b.matchedText = d("WAWebBaseModel").prop()),
          (b.thumbnail = d("WAWebBaseModel").prop()),
          (b.thumbnailHQ = d("WAWebBaseModel").prop()),
          (b.richPreviewType = d("WAWebBaseModel").prop()),
          (b.doNotPlayInline = d("WAWebBaseModel").prop()),
          (b.rcat = d("WAWebBaseModel").prop()),
          (b.title = d("WAWebBaseModel").prop()),
          (b.description = d("WAWebBaseModel").prop()),
          (b.paymentLinkMetadata = d("WAWebBaseModel").prop()),
          (b.businessOwnerJid = d("WAWebBaseModel").prop()),
          (b.productId = d("WAWebBaseModel").prop()),
          (b.currencyCode = d("WAWebBaseModel").prop()),
          (b.priceAmount1000 = d("WAWebBaseModel").prop()),
          (b.salePriceAmount1000 = d("WAWebBaseModel").prop()),
          (b.retailerId = d("WAWebBaseModel").prop()),
          (b.url = d("WAWebBaseModel").prop()),
          (b.productImageCount = d("WAWebBaseModel").prop()),
          (b.sessionId = d("WAWebBaseModel").prop()),
          (b.pollName = d("WAWebBaseModel").prop()),
          (b.pollOptions = d("WAWebBaseModel").prop()),
          (b.pollSelectableOptionsCount = d("WAWebBaseModel").prop()),
          (b.pollInvalidated = d("WAWebBaseModel").prop(!1)),
          (b.pollContentType = d("WAWebBaseModel").prop()),
          (b.isSentCagPollCreation = d("WAWebBaseModel").prop(!1)),
          (b.pollUpdateParentKey = d("WAWebBaseModel").prop()),
          (b.encPollVote = d("WAWebBaseModel").prop()),
          (b.selectedOptionLocalIds = d("WAWebBaseModel").prop()),
          (b.pollVotesSnapshot = d("WAWebBaseModel").prop()),
          (b.senderTimestampMs = d("WAWebBaseModel").prop()),
          (b.latestEditMsgKey = d("WAWebBaseModel").prop(null)),
          (b.latestEditSenderTimestampMs = d("WAWebBaseModel").prop(null)),
          (b.editMsgType = d("WAWebBaseModel").prop()),
          (b.recipients = d("WAWebBaseModel").prop()),
          (b.broadcast = d("WAWebBaseModel").prop()),
          (b.quotedMsg = d("WAWebBaseModel").prop()),
          (b.quotedStanzaID = d("WAWebBaseModel").prop()),
          (b.quotedRemoteJid = d("WAWebBaseModel").prop()),
          (b.quotedParticipant = d("WAWebBaseModel").prop()),
          (b.quotedGroupSubject = d("WAWebBaseModel").prop()),
          (b.quotedParentGroupJid = d("WAWebBaseModel").prop()),
          (b.mentionedJidList = d("WAWebBaseModel").prop()),
          (b.reporterJidList = d("WAWebBaseModel").prop()),
          (b.groupMentions = d("WAWebBaseModel").prop()),
          (b.footer = d("WAWebBaseModel").prop()),
          (b.hydratedButtons = d("WAWebBaseModel").prop()),
          (b.buttons = d("WAWebBaseModel").session()),
          (b.hsmTag = d("WAWebBaseModel").prop()),
          (b.hsmCategory = d("WAWebBaseModel").prop()),
          (b.templateId = d("WAWebBaseModel").prop()),
          (b.eventName = d("WAWebBaseModel").prop()),
          (b.isEventCanceled = d("WAWebBaseModel").prop(!1)),
          (b.eventDescription = d("WAWebBaseModel").prop()),
          (b.eventJoinLink = d("WAWebBaseModel").prop()),
          (b.eventStartTime = d("WAWebBaseModel").prop()),
          (b.eventEndTime = d("WAWebBaseModel").prop()),
          (b.eventLocation = d("WAWebBaseModel").prop()),
          (b.eventInvalidated = d("WAWebBaseModel").prop(!1)),
          (b.selectedId = d("WAWebBaseModel").prop()),
          (b.selectedIndex = d("WAWebBaseModel").prop()),
          (b.selectedCarouselCardIndex = d("WAWebBaseModel").prop()),
          (b.multicast = d("WAWebBaseModel").prop()),
          (b.urlText = d("WAWebBaseModel").prop()),
          (b.urlNumber = d("WAWebBaseModel").prop()),
          (b.statusMentioned = d("WAWebBaseModel").prop()),
          (b.isWamoSub = d("WAWebBaseModel").prop()),
          (b.clearMedia = d("WAWebBaseModel").prop()),
          (b.isVcardOverMmsDocument = d("WAWebBaseModel").prop(!1)),
          (b.isCaptionByUser = d("WAWebBaseModel").prop()),
          (b.vcardList = d("WAWebBaseModel").prop()),
          (b.vcardFormattedName = d("WAWebBaseModel").prop()),
          (b.revokeSender = d("WAWebBaseModel").prop()),
          (b.protocolMessageKey = d("WAWebBaseModel").prop()),
          (b.futureproofBuffer = d("WAWebBaseModel").prop()),
          (b.futureproofParams = d("WAWebBaseModel").prop()),
          (b.futureproofType = d("WAWebBaseModel").prop()),
          (b.futureproofSubtype = d("WAWebBaseModel").prop()),
          (b.templateParams = d("WAWebBaseModel").prop()),
          (b.textColor = d("WAWebBaseModel").prop()),
          (b.backgroundColor = d("WAWebBaseModel").prop()),
          (b.font = d("WAWebBaseModel").prop()),
          (b.cannotBeRanked = d("WAWebBaseModel").prop()),
          (b.campaignId = d("WAWebBaseModel").prop()),
          (b.campaignDuration = d("WAWebBaseModel").prop()),
          (b.actionLink = d("WAWebBaseModel").prop()),
          (b.statusPSAReadTimestamp = d("WAWebBaseModel").prop()),
          (b.isForwarded = d("WAWebBaseModel").prop(!1)),
          (b.isQuestion = d("WAWebBaseModel").prop(!1)),
          (b.forwardingScore = d("WAWebBaseModel").prop()),
          (b.labels = d("WAWebBaseModel").prop()),
          (b.hasReaction = d("WAWebBaseModel").prop(!1)),
          (b.paymentCurrency = d("WAWebBaseModel").prop()),
          (b.paymentAmount1000 = d("WAWebBaseModel").prop()),
          (b.paymentMessageReceiverJid = d("WAWebBaseModel").prop()),
          (b.paymentTransactionTimestamp = d("WAWebBaseModel").prop()),
          (b.paymentStatus = d("WAWebBaseModel").prop()),
          (b.paymentTxnStatus = d("WAWebBaseModel").prop()),
          (b.paymentNoteMsg = d("WAWebBaseModel").prop()),
          (b.paymentRequestMessageKey = d("WAWebBaseModel").prop()),
          (b.paymentExpiryTimestamp = d("WAWebBaseModel").prop()),
          (b.paymentInviteServiceType = d("WAWebBaseModel").prop()),
          (b.ephemeralDuration = d("WAWebBaseModel").prop()),
          (b.ephemeralSettingTimestamp = d("WAWebBaseModel").prop()),
          (b.ephemeralOutOfSync = d("WAWebBaseModel").prop()),
          (b.ephemeralSharedSecret = d("WAWebBaseModel").prop()),
          (b.disappearingModeInitiator = d("WAWebBaseModel").prop()),
          (b.ephemeralSettingUser = d("WAWebBaseModel").prop()),
          (b.disappearingModeTrigger = d("WAWebBaseModel").prop()),
          (b.disappearingModeInitiatedByMe = d("WAWebBaseModel").prop()),
          (b.parentMsgKey = d("WAWebBaseModel").prop()),
          (b.associationType = d("WAWebBaseModel").prop()),
          (b.viewMode = d("WAWebBaseModel").prop()),
          (b.messageSecret = d("WAWebBaseModel").prop()),
          (b.originalSelfAuthor = d("WAWebBaseModel").prop()),
          (b.bizPrivacyStatus = d("WAWebBaseModel").prop()),
          (b.privacyModeWhenSent = d("WAWebBaseModel").prop()),
          (b.verifiedBizName = d("WAWebBaseModel").prop()),
          (b.inviteCode = d("WAWebBaseModel").prop()),
          (b.inviteCodeExp = d("WAWebBaseModel").prop()),
          (b.inviteGrp = d("WAWebBaseModel").prop()),
          (b.inviteGrpName = d("WAWebBaseModel").prop()),
          (b.inviteGrpJpegThum = d("WAWebBaseModel").prop()),
          (b.inviteGrpType = d("WAWebBaseModel").prop()),
          (b.sellerJid = d("WAWebBaseModel").prop()),
          (b.message = d("WAWebBaseModel").prop()),
          (b.orderTitle = d("WAWebBaseModel").prop()),
          (b.itemCount = d("WAWebBaseModel").prop()),
          (b.orderId = d("WAWebBaseModel").prop()),
          (b.surface = d("WAWebBaseModel").prop()),
          (b.status = d("WAWebBaseModel").prop()),
          (b.token = d("WAWebBaseModel").prop()),
          (b.totalAmount1000 = d("WAWebBaseModel").prop()),
          (b.totalCurrencyCode = d("WAWebBaseModel").prop()),
          (b.catalogType = d("WAWebBaseModel").prop()),
          (b.historySyncMetaData = d("WAWebBaseModel").prop()),
          (b.isSendFailure = d("WAWebBaseModel").prop()),
          (b.errorCode = d("WAWebBaseModel").prop()),
          (b.appStateSyncKeyShare = d("WAWebBaseModel").prop()),
          (b.appStateSyncKeyRequest = d("WAWebBaseModel").prop()),
          (b.appStateFatalExceptionNotification = d("WAWebBaseModel").prop()),
          (b.peerDataOperationRequestMessage = d("WAWebBaseModel").prop()),
          (b.peerDataOperationRequestResponseMessage =
            d("WAWebBaseModel").prop()),
          (b.broadcastParticipants = d("WAWebBaseModel").prop()),
          (b.broadcastEphSettings = d("WAWebBaseModel").prop()),
          (b.broadcastId = d("WAWebBaseModel").prop()),
          (b.smbClientCampaignId = d("WAWebBaseModel").prop()),
          (b.ctwaContext = d("WAWebBaseModel").prop()),
          (b.utm = d("WAWebBaseModel").session()),
          (b.list = d("WAWebBaseModel").prop()),
          (b.listResponse = d("WAWebBaseModel").prop()),
          (b.productListItemCount = d("WAWebBaseModel").prop()),
          (b.productHeaderImageRejected = d("WAWebBaseModel").prop(!1)),
          (b.agentId = d("WAWebBaseModel").prop()),
          (b.lastPlaybackProgress = d("WAWebBaseModel").prop(0)),
          (b.local = d("WAWebBaseModel").session(!1)),
          (b.search = d("WAWebBaseModel").session()),
          (b.msgChunk = d("WAWebBaseModel").session()),
          (b.startOfDay = d("WAWebBaseModel").session()),
          (b.startOfDaySkew = d("WAWebBaseModel").session()),
          (b.quotedMsgKey = d("WAWebBaseModel").session()),
          (b.isQuotedMsgAvailable = d("WAWebBaseModel").session(!0)),
          (b.fromQuotedMsg = d("WAWebBaseModel").session(!1)),
          (b.senderObj = d("WAWebBaseModel").session()),
          (b.mediaData = d("WAWebBaseModel").session()),
          (b.forwardedFromWeb = d("WAWebBaseModel").session(!1)),
          (b.nonce = d("WAWebBaseModel").session()),
          (b.squelch = d("WAWebBaseModel").session()),
          (b.wamMessageSendReporter = d("WAWebBaseModel").session()),
          (b.wamMessageSendPerfReporter = d("WAWebBaseModel").session()),
          (b.pendingDeleteForMe = d("WAWebBaseModel").session(!1)),
          (b.isDynamicReplyButtonsMsg = d("WAWebBaseModel").prop(!1)),
          (b.dynamicReplyButtons = d("WAWebBaseModel").prop()),
          (b.replyButtons = d("WAWebBaseModel").session()),
          (b.buttonsResponse = d("WAWebBaseModel").prop()),
          (b.selectedButtonId = d("WAWebBaseModel").prop()),
          (b.headerType = d("WAWebBaseModel").prop()),
          (b.nativeFlowName = d("WAWebBaseModel").prop()),
          (b.nativeFlowButtons = d("WAWebBaseModel").prop()),
          (b.interactiveHeader = d("WAWebBaseModel").prop()),
          (b.interactiveType = d("WAWebBaseModel").prop()),
          (b.interactivePayload = d("WAWebBaseModel").prop()),
          (b.nativeFlowInteractiveMsg = d("WAWebBaseModel").prop()),
          (b.carouselCardsParsed = d("WAWebBaseModel").prop()),
          (b.carouselCards = d("WAWebBaseModel").session()),
          (b.isCarouselCard = d("WAWebBaseModel").prop(!1)),
          (b.parentMsgId = d("WAWebBaseModel").prop(null)),
          (b.callSilenceReason = d("WAWebBaseModel").prop(null)),
          (b.callOutcome = d("WAWebBaseModel").prop()),
          (b.isVideoCall = d("WAWebBaseModel").prop(!1)),
          (b.callDuration = d("WAWebBaseModel").prop(null)),
          (b.callCreator = d("WAWebBaseModel").prop(null)),
          (b.callParticipants = d("WAWebBaseModel").prop(null)),
          (b.isCallLink = d("WAWebBaseModel").prop(null)),
          (b.callLinkToken = d("WAWebBaseModel").prop(null)),
          (b.reactionParentKey = d("WAWebBaseModel").prop()),
          (b.reactionText = d("WAWebBaseModel").prop()),
          (b.reactionTimestamp = d("WAWebBaseModel").prop()),
          (b.targetMessageKey = d("WAWebBaseModel").prop()),
          (b.encIv = d("WAWebBaseModel").prop()),
          (b.encPayload = d("WAWebBaseModel").prop()),
          (b.replyCount = d("WAWebBaseModel").prop()),
          (b.pinParentKey = d("WAWebBaseModel").prop()),
          (b.pinMessageType = d("WAWebBaseModel").prop()),
          (b.pinSenderTimestampMs = d("WAWebBaseModel").prop()),
          (b.pinExpiryDuration = d("WAWebBaseModel").prop()),
          (b.revokeDuration = d("WAWebBaseModel").session()),
          (b.isMdHistoryMsg = d("WAWebBaseModel").prop(!1)),
          (b.stickerSentTs = d("WAWebBaseModel").prop(0)),
          (b.isAvatar = d("WAWebBaseModel").prop(!1)),
          (b.bizSource = d("WAWebBaseModel").prop()),
          (b.pmCampaignId = d("WAWebBaseModel").prop()),
          (b.lastUpdateFromServerTs = d("WAWebBaseModel").prop(0)),
          (b.botEditType = d("WAWebBaseModel").prop()),
          (b.invokedBotWid = d("WAWebBaseModel").prop(null)),
          (b.botMessageSecret = d("WAWebBaseModel").prop()),
          (b.botFeedbackKind = d("WAWebBaseModel").prop()),
          (b.botFeedbackText = d("WAWebBaseModel").prop()),
          (b.botTargetSenderJid = d("WAWebBaseModel").prop()),
          (b.bizBotType = d("WAWebBaseModel").prop(null)),
          (b.botPersonaId = d("WAWebBaseModel").prop()),
          (b.activeBotMsgStreamingInProgress = d("WAWebBaseModel").session(!1)),
          (b.botEditTimeoutID = d("WAWebBaseModel").session()),
          (b.lastBotEditBodyLength = d("WAWebBaseModel").session()),
          (b.botEditTargetId = d("WAWebBaseModel").session()),
          (b.botRespOrInvocationRevokeBotWid =
            d("WAWebBaseModel").session(null)),
          (b.botResponseTargetId = d("WAWebBaseModel").prop(null)),
          (b.botPluginType = d("WAWebBaseModel").prop(null)),
          (b.botPluginReferenceIndex = d("WAWebBaseModel").prop(null)),
          (b.botPluginSearchProvider = d("WAWebBaseModel").prop(null)),
          (b.botPluginSearchUrl = d("WAWebBaseModel").prop(null)),
          (b.botPluginSearchQuery = d("WAWebBaseModel").prop(null)),
          (b.botPluginMaybeParent = d("WAWebBaseModel").prop(!1)),
          (b.botReelPluginThumbnailCdnUrl = d("WAWebBaseModel").prop(null)),
          (b.botMessageDisclaimerText = d("WAWebBaseModel").prop(null)),
          (b.botMsgBodyType = d("WAWebBaseModel").prop(null)),
          (b.isSupportAIMessage = d("WAWebBaseModel").prop()),
          (b.supportCitations = d("WAWebBaseModel").prop()),
          (b.richResponse = d("WAWebBaseModel").prop()),
          (b.forwardedNewsletterMessageInfo = d("WAWebBaseModel").prop()),
          (b.encryptedData = d("WAWebBaseModel").prop()),
          (b.newsletterAdminInviteInfo = d("WAWebBaseModel").prop()),
          (b.reportingTokenInfo = d("WAWebBaseModel").prop()),
          (b.reportingTokenContent = d("WAWebBaseModel").prop()),
          (b.plainProtobufBytes = d("WAWebBaseModel").session()),
          (b.preMatChat = d("WAWebBaseModel").session()),
          (b.senderWithDevice = d("WAWebBaseModel").session()),
          (b.isRetry = d("WAWebBaseModel").session(!1)),
          (b.isOffline = d("WAWebBaseModel").session(!1)),
          (b.musicArtwork = d("WAWebBaseModel").prop()),
          (b.$MsgImpl$p_1 = d("WAWebBaseModel").session(function () {
            return [];
          })),
          (b.$MsgImpl$p_2 = d("WAWebBaseModel").session(function () {
            return [];
          })),
          (b.$MsgImpl$p_3 = d("WAWebBaseModel").session(function () {
            return [];
          })),
          (b.linksIndexParsed = d("WAWebBaseModel").session(0)),
          (b.$MsgImpl$p_4 = d("WAWebBaseModel").session()),
          (b.$MsgImpl$p_5 = d("WAWebBaseModel").session(function () {
            return [];
          })),
          (b.$MsgImpl$p_6 = d("WAWebBaseModel").session(function () {
            return [];
          })),
          (b.$MsgImpl$p_7 = d("WAWebBaseModel").session(function () {
            return [];
          })),
          (b.phoneNumbersIndexParsed = d("WAWebBaseModel").session(0)),
          (b.$MsgImpl$p_8 = d("WAWebBaseModel").session()),
          (b.requiresDirectConnection = d("WAWebBaseModel").prop(null)),
          (b.isOverwrittenByRevoke = d("WAWebBaseModel").session(!1)),
          (b.bizContentPlaceholderType = d("WAWebBaseModel").prop(null)),
          (b.hostedBizEncStateMismatch = d("WAWebBaseModel").prop(!1)),
          (b.senderOrRecipientAccountTypeHosted = d("WAWebBaseModel").prop(!1)),
          (b.placeholderCreatedWhenAccountIsHosted = d("WAWebBaseModel").prop(
            !1
          )),
          (b.limitSharing = d("WAWebBaseModel").prop()),
          (b.galaxyFlowWAMMessageId = d("WAWebBaseModel").prop()),
          (b.galaxyFlowQPLMessageId = d("WAWebBaseModel").prop()),
          (b.$MsgImpl$p_18 = c("lodash").debounce(function (a, b) {
            d("WAWebDBUpdateMessageTable").updateMessageTable(a, {
              lastPlaybackProgress: b,
            });
          }, 500)),
          babelHelpers.assertThisInitialized(b)) ||
          babelHelpers.assertThisInitialized(b)
        );
      }
      var f = e.prototype;
      f.pendingAckUpdate_TESTONLY = function () {
        return this.$MsgImpl$p_9;
      };
      f.initialize = function () {
        var b = this;
        a.prototype.initialize.call(this);
        this.carouselCardsParsed != null && this.$MsgImpl$p_10();
        this.type === d("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          this.listenTo(this, "change:carouselCardsParsed", this.$MsgImpl$p_10);
        this.$MsgImpl$p_9 = new (d("WAWebPromiseQueue").PromiseQueue)();
        var e = d("WAWebMsgModelUtils").getValidatedSender(this);
        e &&
          (this.addChild(
            "senderObj",
            d("WAWebContactCollection").ContactCollection.gadd(
              e.isUser() && !e.isFbidBot() && !e.isHosted() && !e.isNewsletter()
                ? d("WAWebWidFactory").createWid(
                    e.isLid()
                      ? d("WAJids").toLidUserJid(e.user)
                      : d("WAJids").toPhoneUserJid(e.user)
                  )
                : e
            )
          ),
          this.hsmTag === d("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING &&
            this.senderObj.setIsMarketingMessageThread(!0));
        this.mentionedJidList = this.mentionedJidList || [];
        this.groupMentions = this.groupMentions || [];
        this.mentionedJidList.forEach(function (a) {
          return d("WAWebContactCollection").ContactCollection.gadd(a);
        });
        this.type === d("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
          this.listenToOnce(this, "change:type", this.$MsgImpl$p_11);
        this.mediaObject = void 0;
        d("WAWebMsgModelUtils").typeIsMms(this) &&
          (this.$MsgImpl$p_12(),
          (!this.isViewOnce ||
            d("WAWebViewOnceState").isUnviewed(this.safe())) &&
            d("WAWebMedia").registerMsg(this));
        d("WAWebConnModel").Conn.isSMB &&
          d("WAWebBizLabelUtils").initializeLabels(this);
        this.isViewOnce &&
          (this.listenTo(this, "change:ack", this.$MsgImpl$p_13),
          this.listenTo(
            this.mediaData,
            "change:mediaStage",
            this.$MsgImpl$p_13
          ));
        this.listenTo(this, "change:viewMode", this.$MsgImpl$p_14);
        d("WAWebViewModeUtils").isViewModeVisibleInSurface(
          d("WAWebViewMode.flow").ViewModeSurface.CHAT,
          this.viewMode
        ) || this.$MsgImpl$p_14();
        c("gkx")("26258") ||
          this.listenTo(this, "change:t", function () {
            Number.isInteger(b.t) ||
              d("WALogger")
                .ERROR(o(), b.t, b.id.toString(), b.type, b.subtype)
                .tags("date_marker")
                .sendLogs("Msg TS updated to invalid value");
          });
        if (d("WAWebBotGating").isBotReceiveEnabled()) {
          d("WAWebMsgGetters").getIsMetaBotResponse(this) &&
            this.listenTo(this, "change:botEditType", this.$MsgImpl$p_15);
          this.recvFresh &&
            ((e = this.senderObj) == null
              ? void 0
              : (e = e.id) == null
              ? void 0
              : e.isBot()) &&
            (this.activeBotMsgStreamingInProgress = !0);
          this.$MsgImpl$p_15();
        }
      };
      f.$MsgImpl$p_14 = function () {
        var a;
        a =
          (a =
            (a = d("WAWebFrontendMsgGetters").getMaybeChat(this)) == null
              ? void 0
              : a.msgs) != null
            ? a
            : this.msgChunk;
        !d("WAWebViewModeUtils").isViewModeVisibleInSurface(
          d("WAWebViewMode.flow").ViewModeSurface.CHAT,
          this.viewMode
        )
          ? (this._triggerNotificationForParentMessage(),
            this.alterChatFields({ messageInHiddenViewMode: !0 }),
            a == null ? void 0 : a.trigger("remove_msgs", [this], {}))
          : a == null
          ? void 0
          : a.trigger("insert_msgs", [this], {});
        a == null ? void 0 : a.triggerChangeLast(null, a, {});
      };
      f.hideParentMessageInChat = function (a) {
        a = a.duringDetach;
        var b = this.parentMsgKey;
        if (b) {
          var c;
          b = this.getCollection().get(b);
          b &&
            ((c = d("WAWebInvisiblePlaceholderViewModeProcessor")
              .InvisiblePlaceholderViewModeProcessor.compatibleMessageTypes) ==
            null
              ? void 0
              : c.includes(b.type)) &&
            d("WAWebMessageAssociationUIUtils").shouldHideParentMessage({
              parentMsg: b,
              duringDetach: a,
            }) &&
            b.set(
              "viewMode",
              d("WAWebViewMode.flow").ViewModeType.INVISIBLE_PLACEHOLDER
            );
        }
      };
      f._triggerNotificationForParentMessage = function () {
        var a = d("WAWebFrontendMsgGetters").getEventType(this),
          b = this.parentMsgKey;
        a =
          this.recvFresh &&
          !d("WAWebMsgGetters").getIsSentByMe(this) &&
          (a === d("WAWebCommonMsgUtils").EventType.DEFAULT ||
            a === d("WAWebCommonMsgUtils").EventType.SIGNIFICANT);
        if (b && a) {
          a = this.getCollection().get(b);
          a &&
          d(
            "WAWebNotificationsMsgNotification"
          ).eligibleMessagesForNotificationRetriggering.has(a.type)
            ? d("WAWebCmd").Cmd.alertNewMsg(a)
            : d("WALogger").LOG(n(), this.id.toString());
        }
      };
      f.$MsgImpl$p_10 = function () {
        var a,
          b = this.carouselCardsParsed;
        if (b == null) return;
        a =
          (a = (a = this.carouselCards) == null ? void 0 : a.getCardsById()) !=
          null
            ? a
            : {};
        var d = [];
        for (b of b) {
          var e = b.id.toString();
          if (a[e] != null) {
            e = a[e];
            e.set(b);
            d.push(e);
          } else {
            e = babelHelpers["extends"]({}, b);
            d.push(e);
          }
        }
        e = new (c("WAWebCarouselCardsCollection"))();
        e.add(d);
        this.carouselCards = e;
        this.getCollection().add(e.slice());
      };
      f.$MsgImpl$p_15 = function () {
        var a = this;
        if (!d("WAWebBotGating").isBotReceiveEnabled()) return;
        if (
          this.subtype ===
          d("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE
        ) {
          var b = d(
            "WAWebBotGenTypingIndicatorMsg"
          ).getBotTypingIndicatorTimeout();
          self.setTimeout(function () {
            a["delete"]();
          }, b);
          void c("WAWebChangePresenceHandlerAction")({
            id: this.id.remote,
            type: "typing",
          });
          return;
        }
        b = this.botEditType;
        if (b == null) return;
        var e = d(
          "WAWebBotGenTypingIndicatorMsg"
        ).getBotTypingIndicatorTimeout();
        switch (b) {
          case d("WAWebBotTypes").BotMsgEditType.LAST:
          case d("WAWebBotTypes").BotMsgEditType.FULL:
            this.activeBotMsgStreamingInProgress = !1;
            this.botEditTimeoutID && self.clearTimeout(this.botEditTimeoutID);
            return;
          default:
            this.botEditTimeoutID = self.setTimeout(function () {
              (a.activeBotMsgStreamingInProgress = !1),
                (a.botEditType = d("WAWebBotTypes").BotMsgEditType.LAST),
                void d("WAWebDBUpdateMessageTable").updateMessageTable(a.id, {
                  botEditType: d("WAWebBotTypes").BotMsgEditType.LAST,
                });
            }, e);
        }
      };
      f.getRawLinks = function () {
        return this.$MsgImpl$p_1;
      };
      f.setRawLinks = function (a) {
        a.length > 0 && (this.$MsgImpl$p_1 = a);
      };
      f.clearRawLinks = function () {
        (this.$MsgImpl$p_1 = []), (this.linksIndexParsed = 0);
      };
      f.getRawPollOptionsToLinks = function () {
        return this.$MsgImpl$p_4;
      };
      f.setRawPollOptionsToLinks = function (a) {
        this.$MsgImpl$p_4 = a;
      };
      f.getRawHeaderLinks = function () {
        return this.$MsgImpl$p_2;
      };
      f.setRawHeaderLinks = function (a) {
        a.length > 0 && (this.$MsgImpl$p_2 = a);
      };
      f.getRawFooterLinks = function () {
        return this.$MsgImpl$p_3;
      };
      f.setRawFooterLinks = function (a) {
        a.length > 0 && (this.$MsgImpl$p_3 = a);
      };
      f.getRawPhoneNumbers = function () {
        return this.$MsgImpl$p_5;
      };
      f.setRawPhoneNumbers = function (a) {
        a.length > 0 && (this.$MsgImpl$p_5 = a);
      };
      f.clearRawPhoneNumbers = function () {
        (this.$MsgImpl$p_5 = []), (this.phoneNumbersIndexParsed = 0);
      };
      f.getRawHeaderPhoneNumbers = function () {
        return this.$MsgImpl$p_6;
      };
      f.setRawHeaderPhoneNumbers = function (a) {
        a.length > 0 && (this.$MsgImpl$p_6 = a);
      };
      f.getRawFooterPhoneNumbers = function () {
        return this.$MsgImpl$p_7;
      };
      f.setRawFooterPhoneNumbers = function (a) {
        a.length > 0 && (this.$MsgImpl$p_7 = a);
      };
      f.$MsgImpl$p_12 = function () {
        this.addChild("mediaData", new (c("WAWebMediaData"))());
      };
      f.mayFail = function () {
        return (
          d("WAWebMsgGetters").getIsSentByMe(this) &&
          this.ack < d("WAWebAck").ACK.SENT
        );
      };
      f.isUnsentPhoneMsg = function () {
        return (
          !this.local &&
          d("WAWebMsgGetters").getIsSentByMe(this) &&
          this.ack < d("WAWebAck").ACK.SENT
        );
      };
      f.supportsStarWithKeepInChat = function () {
        return (
          d("WAWebMsgGetters").getIsEphemeral(this) &&
          (this.star ||
            this.isGif ||
            d("WAWebMsgGetters").getIsStickerMsg(this))
        );
      };
      f.interactiveButtonsReleased = function () {
        return (
          this.isFromTemplate ||
          (!d("WAWebFrontendMsgGetters").getHasTemplateButtons(this) &&
            this.type !== d("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY)
        );
      };
      f.getVcardWids = function () {
        return this.type !== d("WAWebMsgType").MSG_TYPE.VCARD
          ? null
          : d("WAWebVcardParsingUtils").vcardWids(
              d("WAWebMsgGetters").getVcard(this)
            );
      };
      f.getMultiVcardWids = function () {
        if (this.type !== d("WAWebMsgType").MSG_TYPE.MULTI_VCARD) return null;
        var a = d("WAWebMsgGetters")
          .getVcardList(this)
          .map(function (a) {
            return a.vcard;
          })
          .filter(Boolean)
          .map(function (a) {
            return d("WAWebVcardParsingUtils").parseMultiVcard(a);
          })
          .flat();
        a = a
          .map(function (a) {
            return d("WAWebVcardParsingUtils").vcardWids(a);
          })
          .flat();
        return Array.from(new Set(a));
      };
      f.getLocObject = function () {
        var a = this.loc;
        if (a) {
          a = a.split("\n");
          var b = a[0];
          a = a[1];
          a = a === void 0 ? null : a;
          return { name: b, addr: a };
        }
        return null;
      };
      f.resumeRemoteUpload = function () {
        if (d("WAWebMsgGetters").getIsNewsletterMsg(this))
          return d("WAWebMedia").resumeUploadMsg(this);
        this.isUnsentPhoneMsg() &&
          d("WAWebSendMsgRecordAction").sendMsgRecord(this);
        return this.forceDownloadMediaEvenIfExpensive();
      };
      f.forceRMR = function () {
        return (h || (h = b("Promise"))).reject(
          c("err")("unimplemented forceRMR")
        );
      };
      f.isForcingRMR = function () {
        return !1;
      };
      f.cancelDownload = function () {
        d("WAWebMedia").cancelDownloadMsg(this);
      };
      f.resumeUpload = function () {
        this.mediaData.mediaStage !==
          d("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD &&
          d("WALogger")
            .ERROR(m(), this.mediaData.mediaStage)
            .sendLogs("resume-non-need-upload");
        return d("WAWebMedia")
          .resumeUploadMsg(this)
          .then(function (a) {
            return a == null ? void 0 : a.messageSendResult;
          });
      };
      f.cancelUpload = function () {
        d("WAWebMedia").cancelUploadMsg(this);
      };
      f.waitForPhoneUpload = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = this;
          if (
            this.mediaData != null &&
            Boolean(this.mediaData.filehash) &&
            !this.isUnsentPhoneMsg()
          )
            return;
          this.$MsgImpl$p_8 ||
            (this.$MsgImpl$p_8 = c("WAWebEventsWaitForBbEvent")(
              this.mediaData,
              "change:mediaStage change:filehash",
              function () {
                return Boolean(a.mediaData.filehash) && !a.isUnsentPhoneMsg();
              }
            ));
          yield this.$MsgImpl$p_8;
          this.$MsgImpl$p_8 = null;
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      f.forceDownloadMediaEvenIfExpensive = function () {
        return this.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: d("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .MSG_CLICK,
          isUserInitiated: !0,
        });
      };
      f.downloadMedia = function (a) {
        var e = this;
        if (d("WAWebFrontendMsgGetters").getAsRevoked(this))
          return (h || (h = b("Promise"))).resolve();
        var f = a.downloadEvenIfExpensive,
          g = a.rmrReason,
          i = a.isUserInitiated,
          j = a.isAutoDownload,
          k = a.shouldSequenceDownload;
        if (!i && !d("WAWebMsgModelPropUtils").isTrusted(this))
          return (h || (h = b("Promise"))).resolve();
        if (
          !d("WAWebMsgGetters").getIsStatus(this) &&
          d("WAWebFrontendMsgGetters")
            .getChat(this)
            .isSuspendedOrTerminated() &&
          d("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
        ) {
          i &&
            d("WAWebModalManager").ModalManager.open(
              p.jsx(
                c("WAWebSuspendedGroupMediaDownloadFailureModal.react"),
                {}
              ),
              { transition: "modal-flow" }
            );
          return (h || (h = b("Promise"))).resolve();
        }
        d("WAWebFrontendMsgGetters").getAsMms(this) ||
          d("WALogger")
            .ERROR(l(), this.id.toString(), this.type)
            .devConsole(this)
            .sendLogs("media-fault: downloadMedia msg is not mms type");
        if (this.isUnsentPhoneMsg()) {
          var m = this.$MsgImpl$p_8;
          m ||
            (m = this.$MsgImpl$p_8 =
              c("WAWebEventsWaitForBbEvent")(
                this.mediaData,
                "change:mediaStage change:filehash",
                function () {
                  return !!e.mediaData.filehash && !e.isUnsentPhoneMsg();
                }
              ).then(function () {
                e.$MsgImpl$p_8 = null;
              }));
          return m.then(function () {
            return e.downloadMedia(a);
          });
        }
        return d("WAWebMedia").downloadMsg({
          msg: this,
          isUserClick:
            g ===
            d("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_CLICK,
          downloadEvenIfExpensive: f,
          rmrReason: g,
          rmrData: this.$MsgImpl$p_16(g),
          mode: i ? "manual" : "auto",
          isAutoDownload: j,
          chatWid:
            (m = d("WAWebFrontendMsgGetters").getMaybeChat(this)) == null
              ? void 0
              : m.id,
          shouldSequenceDownload: k,
        });
      };
      f.$MsgImpl$p_16 = function (a) {
        a = { webcRmrReason: a, webcMessageT: this.t };
        var b = d("WAWebFrontendMsgGetters").getMaybeChat(this);
        if (b) {
          a.webcChatType = b.getWebcChatType();
          b.initialIndex != null && (a.webcChatPosition = b.initialIndex);
          var c = this.msgChunk;
          c &&
            c === b.msgs &&
            (a.webcMessageIndex = c.length - c.indexOf(this) - 1);
        }
        return a;
      };
      f.applyUpdate = function (a) {
        var c = this;
        if (
          a.type &&
          this.type !== a.type &&
          d("WAWebMsgModelUtils").typeIsMms(a)
        ) {
          !d("WAWebCommonMsgUtils").isPlaceholderMsg(this.type) &&
            !d("WAWebMsgGetters").getIsFutureproof(this) &&
            d("WALogger")
              .ERROR(k(), this.id.toString(), this.type, String(a.type))
              .sendLogs("invalid-type-update");
          this.$MsgImpl$p_12();
          d("WAWebMedia").registerMsgEarly(this, a);
          return d("WAWebMedia")
            .prepareMsg(this)
            .then(function () {
              c.set(a);
            })
            ["catch"](function (a) {
              d("WALogger")
                .ERROR(j(), String(a))
                .devConsole(a)
                .sendLogs("preregister-error");
            });
        }
        this.set(a);
        return (h || (h = b("Promise"))).resolve();
      };
      f.waitForPrep = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a,
            c = this;
          a =
            this.requiresDirectConnection == null
              ? d("WAWebDirectConnectionGatingUtils")
                  .genDirectConnectionMessageModifiers(
                    this.type,
                    (a = this.list) == null ? void 0 : a.listType,
                    this.businessOwnerJid
                  )
                  .then(function (a) {
                    return c.set(a);
                  })
              : (h || (h = b("Promise"))).resolve();
          var e = d("WAWebMsgModelUtils").typeIsMms(this)
            ? d("WAWebMedia").prepareMsg(this)
            : (h || (h = b("Promise"))).resolve();
          yield a;
          return e;
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.alterChatFields = function (a) {
        var b = this.$MsgImpl$p_17().get(this.id.remote);
        if (b) {
          var c;
          d("WAWebBotGating").isBotReceiveEnabled() &&
            (this.id.remote.isBot() ||
              ((c = b.contact.businessProfile) == null
                ? void 0
                : c.isBizBot3p) === !0) &&
            this.subtype ===
              d("WAWebBotGenTypingIndicatorMsg")
                .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
            b.botInitialTypingIndicatorMsgId &&
            b.botInitialTypingIndicatorMsgId.equals(this.id) &&
            b.set({ botInitialTypingIndicatorMsgId: null }, { silent: !0 });
          b.unreadMsgAnchor === this && (b.unreadMsgAnchor = void 0);
          c =
            (a == null ? void 0 : a.messageInHiddenViewMode) === !0 ||
            !a ||
            !a.doNotResetLastReceived;
          if (c && b.lastReceivedKey === this.id) {
            c = void 0;
            var e = d("WAWebChatGetMessage").getLastReceivedMsg(b);
            e && (c = e.id);
            b.lastReceivedKey = c;
          }
          b.composeQuotedMsg === this &&
            (a == null ? void 0 : a.messageInHiddenViewMode) !== !0 &&
            (b.composeQuotedMsg = null);
        }
      };
      f["delete"] = function (b) {
        a.prototype["delete"].call(this);
        this.botEditTimeoutID && self.clearTimeout(this.botEditTimeoutID);
        d("WAWebStarredMsgCollection").AllStarredMsgsCollection.remove(this);
        d(
          "WAWebPinInChatCollection"
        ).PinInChatCollection.deleteByParentMessageKey(this.id);
        d("WAWebLabelCollection").LabelCollection.removeAllLabelsMD(this);
        d("WAWebMsgModelUtils").typeIsMms(this) &&
          d("WAWebMedia").deregisterMsg(this);
        var c = this.getCollection();
        d(
          "WAWebMessageAssociationGatingUtils"
        ).isMessageAssociationInfraEnabled() &&
          d("WAWebMessageAssociationUIUtils")
            .getHiddenAssociatedMessages(this.id)
            .forEach(function (a) {
              a["delete"]();
            });
        c.remove(this.id);
        this.hideParentMessageInChat({ duringDetach: !1 });
        this.msgChunk &&
          this.msgChunk.remove(
            this.id,
            {},
            Boolean(b == null ? void 0 : b.skipUpdatingSortTime)
          );
        this.alterChatFields(b);
        d("WAWebMsgGetters").clearMsgGetterCacheFor(this);
        d("WAWebFrontendMsgGetters").clearFrontendMsgGetterCacheFor(this);
      };
      f.isLastMessage = function () {
        var a = d("WAWebFrontendMsgGetters").getChat(this).msgs.last();
        return this.id.equals(a == null ? void 0 : a.id);
      };
      f.msgContextInfo = function (a) {
        var b = this.toJSON();
        b.id;
        b.t;
        b.notifyName;
        b.from;
        b.to;
        b.author;
        b.ack;
        b.invis;
        b.isNewMsg;
        b.star;
        b.recvFresh;
        b.recipients;
        b.broadcast;
        b.quotedMsg;
        b.quotedStanzaID;
        b.quotedRemoteJid;
        b.quotedParticipant;
        b.senderObj;
        b.multicast;
        b.replyButtons;
        b.buttons;
        b.latestEditMsgKey;
        b.latestEditSenderTimestampMs;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "id",
          "t",
          "notifyName",
          "from",
          "to",
          "author",
          "ack",
          "invis",
          "isNewMsg",
          "star",
          "recvFresh",
          "recipients",
          "broadcast",
          "quotedMsg",
          "quotedStanzaID",
          "quotedRemoteJid",
          "quotedParticipant",
          "senderObj",
          "multicast",
          "replyButtons",
          "buttons",
          "latestEditMsgKey",
          "latestEditSenderTimestampMs",
        ]);
        var c = this.id,
          e = null;
        a && !c.remote.equals(a) && (e = c.remote);
        a = d("WAWebMsgGetters").getIsNewsletterMsg(this)
          ? this.id.remote
          : d("WAWebMsgGetters").getSender(this);
        return {
          quotedMsg: b,
          quotedParticipant: a,
          quotedStanzaID: c.id,
          quotedRemoteJid: e,
        };
      };
      f.displayName = function (a) {
        a === void 0 && (a = {});
        a = a;
        var b = a.showShortName;
        b = b === void 0 ? !1 : b;
        var e = a.showVerifiedName;
        e = e === void 0 ? !1 : e;
        var f = a.withPushName;
        f = f === void 0 ? !1 : f;
        var g = a.withPushNameOnly;
        g = g === void 0 ? !1 : g;
        a = a.newPushNameFormatting;
        a = a === void 0 ? !1 : a;
        if (!d("WAWebMsgGetters").getSender(this)) return "";
        if (
          d("WAWebUserPrefsMeUser").isMeAccount(
            d("WAWebMsgGetters").getSender(this)
          )
        )
          return c("fbs")
            ._(/*BTDS*/ "__JHASH__IBzirFr1ZJs__JHASH__")
            .toString();
        if (d("WAWebMsgGetters").getIsPSA(this))
          return d("WAWebConnModel").Conn.isSMB
            ? c("fbs")._(/*BTDS*/ "__JHASH__MDLrDq6bFhw__JHASH__").toString()
            : c("fbs")._(/*BTDS*/ "__JHASH__8HYf1Fxz_sn__JHASH__").toString();
        if (this.senderObj == null) return "";
        var h = this.senderObj;
        b = b ? h.shortName : void 0;
        if (!c("isStringNullOrEmpty")(b)) return b;
        else if (h.name) return h.name;
        if (
          e &&
          h.verifiedLevel ===
            d("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH &&
          h.verifiedName
        )
          return h.verifiedName;
        if (d("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
          b = d("WAWebFrontendContactGetters").getFormattedUsernameAndType(h);
          if (b != null) return b.displayName;
        }
        e = a
          ? d("WAWebChatContactUtils")
              .getFormattedNotifyName(this.notifyName)
              .toString()
          : "~" + this.notifyName;
        b = f && this.notifyName ? e : "";
        if (g && b) return b;
        f = (
          (a = d("WAWebMsgGetters").getSender(this)) == null
            ? void 0
            : a.isLid()
        )
          ? d("WAWebFrontendContactGetters").getUserDisplayNameForLid(h)
          : d("WAWebWidFormat").widToFormattedUser(
              d("WAWebMsgGetters").getSender(this)
            );
        d("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
          d("WAWebFrontendMsgGetters").getChat(this),
          h
        ) && (f = d("WAWebFrontendContactGetters").getMaskedPhoneLid(h));
        return "" + f + (b ? " " : "") + b;
      };
      f.isMentioned = function (a) {
        return !this.mentionedJidList
          ? !1
          : this.mentionedJidList.findIndex(function (b) {
              return b.equals(a);
            }) > -1;
      };
      f.mentionMap = function () {
        if (!this.mentionedJidList) return null;
        if (!this.mentionedJidList.length) return null;
        var a = {};
        this.mentionedJidList.forEach(function (b) {
          a["@" + (c("WAWebWid").user(b) || "")] = d(
            "WAWebContactCollection"
          ).ContactCollection.gadd(b);
        });
        return a;
      };
      f.groupMentionMap = function () {
        var a;
        if (!this.groupMentions) return null;
        return !this.groupMentions.length
          ? null
          : (a = this.groupMentions) == null
          ? void 0
          : a.reduce(function (a, b) {
              var c = "@" + b.groupJid.toString();
              a[c] = b.groupSubject;
              return a;
            }, {});
      };
      f.updateAck = function (a, b) {
        var c = this;
        b === void 0 && (b = !1);
        var e = this.ack,
          f = d("WAWebFrontendMsgGetters").getMaybeChat(this);
        if (
          !d("WAWebMsgGetters").getIsStatus(this) &&
          f != null &&
          d("WAWebChatGetters").getIsGroup(f) &&
          this.isMdHistoryMsg &&
          a >= d("WAWebAck").ACK.RECEIVED &&
          this.id.fromMe
        )
          return;
        d("WATypeUtils").isNumber(a) &&
        (e === void 0 || a > e || a === d("WAWebAck").ACK.FAILED)
          ? ((this.ack = a),
            b ||
              this.$MsgImpl$p_9.enqueue(function () {
                return d("WAWebDBUpdateMessageTable").updateMessageTable(c.id, {
                  ack: a,
                });
              }))
          : a === d("WAWebAck").ACK.FAILED &&
            this.ack === d("WAWebAck").ACK.CLOCK &&
            ((this.ack = d("WAWebAck").ACK.FAILED),
            this.$MsgImpl$p_9.enqueue(function () {
              return d("WAWebDBUpdateMessageTable").updateMessageTable(c.id, {
                ack: a,
              });
            }));
      };
      f.updateErrorCode = function (a) {
        this.errorCode = a;
        return d("WAWebDBUpdateMessageTable").updateMessageTable(this.id, {
          errorCode: a,
        });
      };
      f.updateGalaxyFlowMsgLoggingIds = function (a, b) {
        this.galaxyFlowWAMMessageId = a;
        this.galaxyFlowQPLMessageId = b;
        return d("WAWebDBUpdateMessageTable").updateMessageTable(this.id, {
          galaxyFlowWAMMessageId: a,
          galaxyFlowQPLMessageId: b,
        });
      };
      f.updateLastPlaybackProgress = function (a) {
        (this.lastPlaybackProgress = a), this.$MsgImpl$p_18(this.id, a);
      };
      f.avParams = function () {
        return d("WAWebMedia").mediaMetadata(this);
      };
      f.resend = function () {
        var a = this;
        if (d("WAWebMsgGetters").getIsFailed(this)) {
          if (d("WAWebMsgGetters").getIsEdited(this))
            return d("WAWebSendMessageEditAction").resendLatestEdit(this);
          var c = { ack: d("WAWebAck").ACK.CLOCK };
          c.isSendFailure = !1;
          this.$MsgImpl$p_9.enqueue(
            b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield d("WAWebDBUpdateMessageTable").updateMessageTable(a.id, c),
                a.set(c);
            })
          );
          if (d("WAWebMsgGetters").getIsNewsletterMsg(this))
            return d("WAWebNewsletterSendMsgAction")
              .resendNewsletterMsg(this)
              .then(function (a) {
                return a && a.messageSendResult;
              });
          return d("WAWebFrontendMsgGetters").getAsMms(this)
            ? d("WAWebMsgGetters").getIsSentByMeFromWeb(this)
              ? this.resumeUpload()
              : this.resumeRemoteUpload()
            : d("WAWebSendMsgRecordAction")
                .sendMsgRecord(this)
                .then(function (a) {
                  return a.messageSendResult;
                });
        }
        return (h || (h = b("Promise"))).resolve();
      };
      f.$MsgImpl$p_11 = function () {
        if (d("WAWebMsgGetters").getIsStatus(this)) return;
        var a = d("WAWebFrontendMsgGetters").getChat(this),
          b = a.msgs.length;
        a = a.msgs.indexOf(this);
        a !== -1 &&
          b - a <= 10 &&
          !d("WAWebMsgGetters").getIsSentByMe(this) &&
          d("WAWebCmd").Cmd.alertNewMsg(this);
      };
      f.$MsgImpl$p_13 = function () {
        if (!this.isViewOnce) return;
        if (this.mediaData == null) return;
        var a =
            d("WAWebMsgGetters").getIsSentByMe(this) &&
            this.ack >= d("WAWebAck").ACK.SENT &&
            this.mediaData.mediaStage ===
              d("WAWebMediaTypes").MediaDataStage.RESOLVED,
          b =
            !d("WAWebMsgGetters").getIsSentByMe(this) &&
            this.ack >= d("WAWebAck").ACK.PLAYED;
        (a || b) &&
          (this.stopListening(this, "change:ack", this.$MsgImpl$p_13),
          this.stopListening(
            this.mediaData,
            "change:mediaStage",
            this.$MsgImpl$p_13
          ),
          d("WAWebMedia").deregisterMsg(this));
      };
      f.isReaction = function () {
        return d("WAWebMsgGetters").getIsReaction(this);
      };
      f.isEditProtocolMsg = function () {
        return d("WAWebMsgGetters").getIsEditProtocolMsg(this);
      };
      f.getWamDisappearingModeInitiator = function () {
        var a = this.disappearingModeInitiator;
        if (a == null) return null;
        switch (a) {
          case d("WAWebEphemeralityTypes").DisappearingModeInitiator
            .InitiatedByMe:
            return d("WAWebWamEnumDisappearingChatInitiatorType")
              .DISAPPEARING_CHAT_INITIATOR_TYPE.INITIATED_BY_ME;
          case d("WAWebEphemeralityTypes").DisappearingModeInitiator
            .InitiatedByOther:
          case d("WAWebEphemeralityTypes").DisappearingModeInitiator
            .BizUpgradeFbHosting:
            return d("WAWebWamEnumDisappearingChatInitiatorType")
              .DISAPPEARING_CHAT_INITIATOR_TYPE.INITIATED_BY_OTHER;
          case d("WAWebEphemeralityTypes").DisappearingModeInitiator
            .ChangedInChat:
            return d("WAWebWamEnumDisappearingChatInitiatorType")
              .DISAPPEARING_CHAT_INITIATOR_TYPE.CHAT;
        }
      };
      f.getWamMessageType = function () {
        return d("WAWebWamMsgUtils").getWamMessageType(this);
      };
      f.getWamMediaType = function () {
        return d("WAWebWamMsgUtils").getWamMediaType(this);
      };
      f.getWamEditType = function () {
        return d("WAWebMsgGetters").getWamEditType(this);
      };
      f.getForwardingScoreWhenForwarded = function () {
        var a = 5,
          b =
            d("WAWebMsgGetters").getNumTimesForwarded(this) +
            (d("WAWebMsgGetters").getShouldDisplayAsForwarded(this) ? 1 : 0);
        return b >= a
          ? c("WAWebConstantsDeprecated").FREQUENTLY_FORWARDED_SENTINEL
          : b;
      };
      f.isExpired = function () {
        var a = d("WAWebMsgGetters").getEphemeralExpirationTimestamp(this);
        return a == null ? !1 : a <= d("WATimeUtils").unixTime();
      };
      f.isRealMessage = function () {
        var a =
          this.type === d("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
          this.from.equals(d("WAWebUserPrefsMeUser").getMaybeMeUser());
        return (
          !a &&
          !d("WAWebMsgGetters").getIsInitialE2ENotification(this) &&
          this.type !== d("WAWebMsgType").MSG_TYPE.CALL_LOG &&
          !d("WAWebMsgGetters").getIsBizNotification(this) &&
          ![
            "change_number",
            "change_username",
            "masked_thread_created",
          ].includes(this.subtype) &&
          !d("WAWebMsgGetters").getIsDisappearingModeSystemMessage(this)
        );
      };
      f.isExpiredAndNotKept = function () {
        return this.isExpired() && !d("WAWebMsgGetters").getIsKept(this);
      };
      f.timeUntilExpiration = function () {
        var a = d("WAWebMsgGetters").getEphemeralExpirationTimestamp(this);
        if (a == null) return null;
        return this.isExpired() ? 0 : a - d("WATimeUtils").unixTime();
      };
      f.getCollection = function () {
        return d("WAWebMsgCollection").MsgCollection;
      };
      f.$MsgImpl$p_17 = function () {
        return d("WAWebMsgGetters").getIsNewsletterMsg(this)
          ? c("WAWebNewsletterCollection")
          : d("WAWebChatCollection").ChatCollection;
      };
      f.safe = function () {
        return this;
      };
      f.unsafe = function () {
        return this;
      };
      f.$MsgImpl$p_19 = function () {
        return d("WAWebUserPrefsMeUser").isMeAccount(
          d("WAWebMsgGetters").getKicSender(this)
        );
      };
      f.keepIsLockedForMe = function () {
        return this.keepIsLockedByDmSettingsForUser(
          d("WAWebUserPrefsMeUser").getMeUser()
        );
      };
      f.keepIsLockedForUser = function (a) {
        return this.keepIsLockedByDmSettingsForUser(a);
      };
      f.keepIsLockedForMeSenderSuperpower = function () {
        var a = d("WAWebMsgGetters").getKicSender(this);
        a = c("WAWebWid").equals.apply(
          c("WAWebWid"),
          d("WAWebLidMigrationUtils").toCommonAddressingMode(
            a,
            d("WAWebMsgGetters").getSender(this)
          )
        );
        return (
          d("WAWebMsgGetters").getIsUnkept(this) && a && !this.$MsgImpl$p_19()
        );
      };
      f.keepIsLockedByDmSettingsForUser = function (a) {
        var b;
        b = d("WAWebChatGetters").getIsGroup(
          d("WAWebFrontendMsgGetters").getChat(this)
        )
          ? !((b = d("WAWebFrontendMsgGetters").getChat(this).groupMetadata) ==
            null
              ? void 0
              : b.userCanSetEphemeralSetting(a))
          : !1;
        return b;
      };
      f.$MsgImpl$p_20 = function () {
        return !d("WAWebFrontendMsgGetters").getChat(this).supportsKIC()
          ? !1
          : d("WAWebMsgGetters").getIsEphemeral(this) &&
              this.type !== d("WAWebMsgType").MSG_TYPE.REVOKED &&
              !this.isViewOnce &&
              !d("WAWebFrontendMsgGetters").getAsAlbum(this);
      };
      f.canShowKeepOrUnkeepOption = function () {
        return this.canShowKeepOption() || this.canShowUnkeepOption();
      };
      f.canShowKeepOption = function () {
        var a;
        return (
          this.$MsgImpl$p_20() &&
          (d("WAWebChatGroupUtils").canSendToGroup(
            d("WAWebFrontendMsgGetters").getChat(this)
          ) ||
            ((a = d("WAWebFrontendMsgGetters").getChat(this).groupMetadata) ==
            null
              ? void 0
              : a.pastParticipants.get(
                  d("WAWebUserPrefsMeUser").getMeUser()
                )) != null) &&
          !this.keepIsLockedForMe() &&
          !this.star &&
          !this.isGif &&
          !d("WAWebMsgGetters").getIsStickerMsg(this)
        );
      };
      f.canShowUnkeepOption = function () {
        return (
          d("WAWebMsgGetters").getIsKept(this) &&
          this.$MsgImpl$p_20() &&
          (this.canRevokeUnkeep() ||
            this.canShowKeepOption() ||
            this.isGif ||
            d("WAWebMsgGetters").getIsStickerMsg(this))
        );
      };
      f.canRevokeUnkeep = function () {
        if (d("WAWebMsgGetters").getIsSentByMe(this)) {
          var a;
          if (
            d("WAWebChatGetters").getIsGroup(
              d("WAWebFrontendMsgGetters").getChat(this)
            ) &&
            ((a = d("WAWebFrontendMsgGetters").getChat(this).groupMetadata) ==
            null
              ? void 0
              : a.participants.iAmMember()) === !0
          )
            return !0;
          else if (
            d("WAWebChatGetters").getIsUser(
              d("WAWebFrontendMsgGetters").getChat(this)
            ) &&
            !d("WAWebFrontendMsgGetters").getChat(this).contact.isContactBlocked
          )
            return !0;
        }
        return !1;
      };
      f.isPastUnkeepExpirationLimit = function () {
        var a = d("WAWebMsgGetters").getEphemeralExpirationTimestamp(this);
        if (a != null) {
          a = Math.trunc(+new Date() / 1e3) - a;
          return (
            d("WAWebMsgGetters").getIsKept(this) &&
            a >
              d(
                "WAWebEphemeralKeepInChatAbpropUtils"
              ).getUndoKeepInChatExpiration()
          );
        }
        return !1;
      };
      f.shouldShowNotificationPreview = function () {
        var a;
        return (
          !((a = d("WAWebFrontendMsgGetters").getAsViewOnce(this)) == null
            ? void 0
            : a.isViewOnce) &&
          d("WAWebMuteCollection").MuteCollection.getGlobalPreviews()
        );
      };
      f.senderIsGroupParticipant = function () {
        var a = d("WAWebFrontendMsgGetters").getChat(this).groupMetadata;
        if (a == null) return !1;
        var b = d("WAWebMsgGetters").getSender(this);
        if (b != null && a.participants.get(b) != null) return !0;
        if (!a.isCag) return !1;
        b =
          b != null
            ? d("WAWebApiContact").getCurrentLid(
                d("WAWebWidFactory").toUserWid(b)
              )
            : null;
        return b == null ? !1 : a.participants.get(b) != null;
      };
      f.detachAssociatedMsg = function () {
        this.hideParentMessageInChat({ duringDetach: !0 }),
          this.set({
            viewMode: d("WAWebViewMode.flow").ViewModeType.VISIBLE,
            associationType: null,
            parentMsgKey: null,
          });
      };
      return e;
    })(d("WAWebBaseModel").BaseModel);
    a.Proxy = "msg";
    a.idClass = c("WAWebMsgKey");
    a.kind = "__MOCKED_KIND__";
    e = d("WAWebBaseModel").defineModel(a);
    g.Msg = e;
  },
  226
);