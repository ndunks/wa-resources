__d(
    "WAWebContactModel",
    [
        "fbt",
        "WALogger",
        "WATimeUtils",
        "WAWebAlarm",
        "WAWebApiContact",
        "WAWebBaseModel",
        "WAWebBizBusinessChangeAction",
        "WAWebBizGatingUtils",
        "WAWebBizLabelUtils",
        "WAWebBlocklistCollection",
        "WAWebBotGating",
        "WAWebBusinessProfileCollection",
        "WAWebConnModel",
        "WAWebContactCollection",
        "WAWebContactGetters",
        "WAWebContactManagementGating",
        "WAWebContactShortName",
        "WAWebFrontendContactGetters",
        "WAWebL10N",
        "WAWebListsGatingUtils",
        "WAWebOptOutListCollection",
        "WAWebProfilePicThumbCollection",
        "WAWebTextStatusCollection",
        "WAWebTextStatusGatingUtils",
        "WAWebTextStatusUtils",
        "WAWebUpdateTextStatusForContact",
        "WAWebUsernameGatingUtils",
        "WAWebWid",
        "WAWebWidFactory",
    ],
    function (a, b, c, d, e, f, g, h) {
        function i() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "contact:onPendingActionUpdate pendingAction value is invalid",
            ]);
            i = function () {
                return a;
            };
            return a;
        }
        function j() {
            var a = babelHelpers.taggedTemplateLiteralLoose([
                "contact:getStatus for non-user ",
                "",
            ]);
            j = function () {
                return a;
            };
            return a;
        }
        var k = 1e3;
        a = (function (a) {
            babelHelpers.inheritsLoose(b, a);
            function b() {
                var b;
                for (var c = arguments.length, e = new Array(c), f = 0; f < c; f++)
                    e[f] = arguments[f];
                return (
                    ((b = a.call.apply(a, [this].concat(e)) || this),
                        (b.id = d("WAWebBaseModel").prop()),
                        (b.name = d("WAWebBaseModel").prop()),
                        (b.shortName = d("WAWebBaseModel").prop()),
                        (b.pushname = d("WAWebBaseModel").prop()),
                        (b.type = d("WAWebBaseModel").prop("in")),
                        (b.verifiedName = d("WAWebBaseModel").prop()),
                        (b.isBusiness = d("WAWebBaseModel").prop()),
                        (b.isEnterprise = d("WAWebBaseModel").prop()),
                        (b.isSmb = d("WAWebBaseModel").prop()),
                        (b.verifiedLevel = d("WAWebBaseModel").prop()),
                        (b.privacyMode = d("WAWebBaseModel").prop()),
                        (b.statusMute = d("WAWebBaseModel").prop()),
                        (b.sectionHeader = d("WAWebBaseModel").prop()),
                        (b.labels = d("WAWebBaseModel").prop()),
                        (b.isContactSyncCompleted = d("WAWebBaseModel").prop()),
                        (b.forcedBusinessUpdateFromServer = d("WAWebBaseModel").prop()),
                        (b.disappearingModeDuration = d("WAWebBaseModel").prop()),
                        (b.disappearingModeSettingTimestamp = d("WAWebBaseModel").prop()),
                        (b.textStatusString = d("WAWebBaseModel").prop()),
                        (b.textStatusEmoji = d("WAWebBaseModel").prop()),
                        (b.textStatusEphemeralDuration = d("WAWebBaseModel").prop()),
                        (b.textStatusLastUpdateTime = d("WAWebBaseModel").prop(
                            d("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED
                        )),
                        (b.textStatusExpiryTs = d("WAWebBaseModel").prop()),
                        (b.requestedPnTimestamp = d("WAWebBaseModel").prop()),
                        (b.username = d("WAWebBaseModel").prop()),
                        (b.usernamePin = d("WAWebBaseModel").prop()),
                        (b.usernameCountryCode = d("WAWebBaseModel").prop()),
                        (b.syncToAddressbook = d("WAWebBaseModel").prop(!1)),
                        (b.isContactBlocked = d("WAWebBaseModel").session(!1)),
                        (b.isContactOptedOut = d("WAWebBaseModel").session(!1)),
                        (b.isEverOptedOutOfMarketingMessages = d("WAWebBaseModel").session(
                            !1
                        )),
                        (b.isMarketingMessageThread = d("WAWebBaseModel").session(!1)),
                        (b.verificationString = d("WAWebBaseModel").session()),
                        (b.verificationBinary = d("WAWebBaseModel").session()),
                        (b.pendingAction = d("WAWebBaseModel").session()),
                        (b.promises = d("WAWebBaseModel").session(function () {
                            return {};
                        })),
                        (b.status = d("WAWebBaseModel").session()),
                        (b.profilePicThumb = d("WAWebBaseModel").session()),
                        (b.businessProfile = d("WAWebBaseModel").session()),
                        (b.commonGroups = d("WAWebBaseModel").session()),
                        (b.businessCatalog = d("WAWebBaseModel").session()),
                        (b.locale = d("WAWebBaseModel").session()),
                        (b.shareOwnPn = d("WAWebBaseModel").session()),
                        (b.phoneNumber = d("WAWebBaseModel").session()),
                        (b.displayNameLID = d("WAWebBaseModel").session()),
                        (b.isHosted = d("WAWebBaseModel").session(!1)),
                        (b.isOrHasBeenHosted = d("WAWebBaseModel").session(!1)),
                        (b.isFavorite = d("WAWebBaseModel").session(!1)),
                        (b.meTextStatusExpiryTimer = d("WAWebBaseModel").session()),
                        (b.maybeCommonGroupChatModel = d("WAWebBaseModel").session()),
                        (b.canSendMsgWhileTimelocked = d("WAWebBaseModel").session(!0)),
                        babelHelpers.assertThisInitialized(b)) ||
                    babelHelpers.assertThisInitialized(b)
                );
            }
            var e = b.prototype;
            e.$Contact$p_1 = function () {
                var a;
                c("WAWebAlarm").clearTimeout(this.meTextStatusExpiryTimer);
                this.unset(["meTextStatusExpiryTimer"]);
                void d("WAWebUpdateTextStatusForContact").updateTextStatusForContact(
                    this.id,
                    (a = d("WAWebTextStatusUtils")).CLEAR_TEXT_STATUS_STRING_VAL,
                    a.CLEAR_TEXT_STATUS_EMOJI_VAL,
                    a.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL,
                    a.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL
                );
            };
            e.setupStatusExpiration = function () {
                var a = this,
                    b = this.textStatusExpiryTs;
                b != null &&
                    (this.meTextStatusExpiryTimer != null &&
                        c("WAWebAlarm").clearTimeout(this.meTextStatusExpiryTimer),
                        b < d("WATimeUtils").unixTime()
                            ? self.setTimeout(function () {
                                void a.$Contact$p_1();
                            })
                            : (this.meTextStatusExpiryTimer = c("WAWebAlarm").setGlobalTimeout(
                                function () {
                                    return a.$Contact$p_1();
                                },
                                b * k,
                                this.meTextStatusExpiryTimer
                            )));
            };
            e.initialize = function () {
                var b = this;
                a.prototype.initialize.call(this);
                if (!this.id) return;
                d("WAWebContactGetters").getIsMe(this) &&
                    this.addChild(
                        "status",
                        d("WAWebTextStatusCollection").TextStatusCollection.gadd(this.id)
                    );
                d("WAWebContactGetters").getIsMe(this) &&
                    d("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
                    (this.setupStatusExpiration(),
                        this.listenTo(this, "change:textStatusExpiryTs", function () {
                            self.setTimeout(function () {
                                b.setupStatusExpiration();
                            });
                        }));
                d("WAWebContactGetters").getIsMe(this) &&
                    this.addChild(
                        "profilePicThumb",
                        d("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(
                            this.id
                        )
                    );
                (this.isBusiness ||
                    (d("WAWebContactGetters").getIsMe(this) &&
                        d("WAWebConnModel").Conn.isSMB)) &&
                    this.addChild(
                        "businessProfile",
                        d("WAWebBusinessProfileCollection").BusinessProfileCollection.gadd(
                            this.id
                        )
                    );
                this.listenTo(this, "change:isBusiness", function () {
                    return d("WAWebBizBusinessChangeAction").handleBusinessChange(b);
                });
                d("WAWebContactGetters").getIsMe(this) &&
                    this.listenTo(
                        d("WAWebConnModel").Conn,
                        "change:pushname",
                        function () {
                            b.set({ pushname: d("WAWebConnModel").Conn.pushname });
                        }
                    );
                this.listenTo(c("WAWebL10N"), "locale_change", function () {
                    b.locale = c("WAWebL10N").getLocale();
                });
                this.id.isUser() &&
                    (this.updateContactBlocked(),
                        this.updateContactOptedOutOfMarketingMessages());
                this.listenTo(this, "change:name", this.updateShortName);
                this.listenTo(this, "change:name", this.updateName);
                this.pendingAction = 0;
                (d("WAWebConnModel").Conn.isSMB ||
                    d("WAWebListsGatingUtils").isListsEnabled()) &&
                    d("WAWebBizLabelUtils").initializeLabels(this);
                if (this.id.isLid()) {
                    var e =
                        this.phoneNumber ||
                        d("WAWebApiContact").getPhoneNumber(
                            d("WAWebWidFactory").toUserWid(this.id)
                        );
                    e != null && this.copyNameFromPnContact(e);
                } else
                    this.id.isUser() &&
                        (this.updateLidContactName(),
                            this.listenTo(this, "change:name", function () {
                                b.updateLidContactName();
                            }));
                if (d("WAWebBotGating").isBotReceiveEnabled()) {
                    if (!this.id.isBot()) return;
                    if (this.name) return;
                    this.id.user === "13135550002"
                        ? this.set({ name: "Meta AI" })
                        : this.set({
                            name: h._(/*BTDS*/ "__JHASH__1q78JGCOeOd__JHASH__").toString(),
                        });
                    this.set({ type: "out" });
                }
            };
            e.updateName = function () {
                var a;
                !d("WAWebContactGetters").getIsMyContact(this) &&
                    d("WAWebBotGating").isBizBot3pEnabled() &&
                    ((a = this.businessProfile) == null ? void 0 : a.isBizBot3p) === !0 &&
                    this.verifiedName != null &&
                    this.set({ name: this.verifiedName });
            };
            e.updateShortName = function () {
                if (
                    d("WAWebContactGetters").getIsUser(this) &&
                    this.name &&
                    !this.shortName
                ) {
                    var a = d("WAWebContactShortName").getShortName(this.name);
                    a != null && this.set("shortName", a);
                }
            };
            e.updateLidContactName = function () {
                var a = d("WAWebApiContact").getCurrentLid(
                    d("WAWebWidFactory").toUserWid(this.id)
                );
                if (a != null) {
                    a = this.getCollection().get(a);
                    a && a.set({ name: this.name });
                }
            };
            e.copyNameFromPnContact = function (a) {
                var b = this.getCollection().get(a);
                (b == null ? void 0 : b.name) != null && this.set({ name: b.name });
                this.set({ phoneNumber: a });
            };
            e.getStatus = function () {
                c("WAWebWid").user(this.id) ||
                    d("WALogger").LOG(j(), this.id.toString());
                return (this.status = d(
                    "WAWebTextStatusCollection"
                ).TextStatusCollection.gadd(this.id));
            };
            e.getProfilePicThumb = function () {
                return (this.profilePicThumb = d(
                    "WAWebProfilePicThumbCollection"
                ).ProfilePicThumbCollection.gadd(this.id));
            };
            e.addPendingAction = function (a) {
                var b = this,
                    c = function () {
                        b.decPending();
                    };
                a.then(c, c);
                this.pendingAction++;
                return a;
            };
            e.decPending = function () {
                this.pendingAction > 0
                    ? this.pendingAction--
                    : (d("WALogger").LOG(i()), (this.pendingAction = 0));
            };
            e.updateContactBlocked = function () {
                if (!this.id.isUser()) return;
                if (d("WAWebBlocklistCollection").BlocklistCollection.get(this.id))
                    this.isContactBlocked = !0;
                else if (this.id.isLid() && this.phoneNumber != null)
                    this.isContactBlocked =
                        d("WAWebBlocklistCollection").BlocklistCollection.get(
                            this.phoneNumber
                        ) != null;
                else {
                    var a = d("WAWebApiContact").getAlternateUserWid(
                        d("WAWebWidFactory").toUserWid(this.id)
                    );
                    a =
                        a != null &&
                        d("WAWebBlocklistCollection").BlocklistCollection.get(a) != null;
                    this.isContactBlocked = a;
                }
            };
            e.updateContactOptedOutOfMarketingMessages = function () {
                if (!this.id.isUser()) return;
                if (d("WAWebOptOutListCollection").OptOutListCollection.get(this.id))
                    this.isContactOptedOut = !0;
                else if (this.id.isLid() && this.phoneNumber != null)
                    this.isContactOptedOut =
                        d("WAWebOptOutListCollection").OptOutListCollection.get(
                            this.phoneNumber
                        ) != null;
                else {
                    var a = d("WAWebApiContact").getAlternateUserWid(
                        d("WAWebWidFactory").toUserWid(this.id)
                    );
                    a =
                        a != null &&
                        d("WAWebOptOutListCollection").OptOutListCollection.get(a) != null;
                    this.isContactOptedOut = a;
                }
                this.isContactOptedOut && (this.isEverOptedOutOfMarketingMessages = !0);
            };
            e.setIsMarketingMessageThread = function (a) {
                this.isMarketingMessageThread = a;
            };
            e.getIsMarketingMessageThread = function () {
                return this.isMarketingMessageThread;
            };
            e.searchMatch = function (a, b, e) {
                var f = d("WAWebFrontendContactGetters").getSearchName(this),
                    g = d("WAWebFrontendContactGetters").getUsername(this);
                if (
                    (d("WAWebBizGatingUtils").canDisplayLabel() ||
                        d("WAWebListsGatingUtils").isListsEnabled()) &&
                    e
                ) {
                    return a && f && !f.includes(a) && g && !g.includes(a)
                        ? !1
                        : Boolean((g = this.labels) == null ? void 0 : g.includes(e));
                }
                if (!a) return !1;
                if (f && f.includes(a)) return !0;
                g = d("WAWebContactGetters").getUserid(this);
                if (g && g.includes(a)) return !0;
                if (b)
                    if (!this.id.isLid()) {
                        if (g != null && g.includes(b)) return !0;
                    } else if (g != null) {
                        e = d("WAWebApiContact").getPhoneNumber(
                            d("WAWebWidFactory").createUserWid(g, "lid")
                        );
                        if (e != null && e.toString().includes(b)) return !0;
                    }
                f = d("WAWebContactGetters").getSearchVerifiedName(this);
                if (f && f.includes(a)) return !0;
                if (
                    this.pushname &&
                    c("WAWebL10N").accentFold(this.pushname).includes(a)
                )
                    return !0;
                if (
                    this.username != null &&
                    c("WAWebL10N").accentFold(this.username).includes(a) &&
                    d("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
                )
                    return !0;
                if (d("WAWebContactGetters").getIsMe(this)) {
                    g = c("WAWebL10N").accentFold(
                        h._(/*BTDS*/ "__JHASH__XOhSD1cRrEc__JHASH__").toString()
                    );
                    if (g.includes(a)) return !0;
                }
                return !1;
            };
            e.set = function (b, c, e) {
                e = a.prototype.set.call(this, b, c, e);
                if (typeof b !== "string" && (c == null ? void 0 : c.merge) && e) {
                    if (d("WAWebContactGetters").getIsPSA(e)) return e;
                    if (e.id.isBot()) return e;
                    !b.name && e.name && (e.unset("name"), e.unset("shortName"));
                    !b.verifiedName && e.verifiedName && e.unset("verifiedName");
                }
                return e;
            };
            e.getCollection = function () {
                return d("WAWebContactCollection").ContactCollection;
            };
            e.setNotMyContact = function () {
                this.name &&
                    (this.set("name", void 0),
                        this.set("shortName", void 0),
                        this.set("type", "out"));
            };
            e.getSyncToAddressbook = function () {
                var a;
                return !d("WAWebContactManagementGating").contactManagementEnabled()
                    ? !1
                    : (a = this.syncToAddressbook) != null
                        ? a
                        : !0;
            };
            e.canToggleFavorite = function () {
                if (d("WAWebListsGatingUtils").isListsEnabled()) return !0;
                return this.isFavorite
                    ? !0
                    : d("WAWebContactGetters").getIsMyContact(this) &&
                    !this.id.isBot() &&
                    !d("WAWebContactGetters").getIsMe(this);
            };
            return b;
        })(d("WAWebBaseModel").BaseModel);
        a.Proxy = "contact";
        a.idClass = c("WAWebWid");
        b = d("WAWebBaseModel").defineModel(a);
        g["default"] = b;
    },
    226
);