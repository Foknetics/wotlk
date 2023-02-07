import{A as t,cl as e,cu as n,cv as a,B as i,cw as o,cx as l,cy as s,c0 as r,Q as d,n as m,cz as h,co as c,cp as g,cq as u,cr as p,cs as f,bx as S,by as v,cA as b,L as y,bK as W,bF as I,bI as w,ao as T,a$ as R,ap as k,bt as F,d as M,a6 as N,a as P,al as E,K as C}from"./detailed_results-bd7a1567.chunk.js";import{m as O,u as D,E as L,l as B,b as H,a as x,k as A,c as j,B as G,I as J,R as _,F as K,G as q,H as z,J as Q,T as U,t as $}from"./individual_sim_ui-5d28cb06.chunk.js";import{T as V}from"./totem_inputs-f48f848d.chunk.js";const X=O({fieldName:"bloodlust",id:t.fromSpellId(2825)}),Y=D({fieldName:"shield",values:[{value:e.NoShield,tooltip:"No Shield"},{actionId:t.fromSpellId(57960),value:e.WaterShield},{actionId:t.fromSpellId(49281),value:e.LightningShield}]}),Z=D({fieldName:"imbueMh",values:[{value:n.NoImbue,tooltip:"No Main Hand Enchant"},{actionId:t.fromSpellId(58804),value:n.WindfuryWeapon},{actionId:t.fromSpellId(58790),value:n.FlametongueWeapon,text:"R10"},{actionId:t.fromSpellId(58789),value:n.FlametongueWeaponDownrank,text:"R9"},{actionId:t.fromSpellId(58796),value:n.FrostbrandWeapon}]}),tt=D({fieldName:"imbueOh",values:[{value:n.NoImbue,tooltip:"No Off Hand Enchant"},{actionId:t.fromSpellId(58804),value:n.WindfuryWeapon},{actionId:t.fromSpellId(58790),value:n.FlametongueWeapon,text:"R10"},{actionId:t.fromSpellId(58789),value:n.FlametongueWeaponDownrank,text:"R9"},{actionId:t.fromSpellId(58796),value:n.FrostbrandWeapon}]}),et=L({fieldName:"syncType",label:"Sync/Stagger Setting",labelTooltip:"Choose your sync or stagger option, Perfect Sync makes your weapons always attack at the same time, which is ideal for mixed imbues. Delayed Offhand is similar but additionally adds a slight delay to the offhand attacks while staying within the 0.5s flurry ICD window, ideal for matched imbues.",values:[{name:"None",value:a.NoSync},{name:"Perfect Sync",value:a.SyncMainhandOffhandSwings},{name:"Delayed Offhand",value:a.DelayOffhandSwings}]}),nt=B({fieldName:"itemSwap",values:[i.ItemSlotMainHand,i.ItemSlotOffHand],labelTooltip:"Start with the swapped items until Fire Elemntal has been summoned, swap back to normal gear set. Weapons come pre enchanted with FT9 and FT10. If a slot is empty it will not be used in the swap",showWhen:t=>t.getRotation().totems?.useFireElemental&&t.getRotation().enableItemSwap||!1}),at={inputs:[H({fieldName:"enableItemSwap",label:"Enable Item Swapping",labelTooltip:"Toggle on/off item swapping",showWhen:t=>t.getRotation().totems?.useFireElemental||!1}),nt,x({fieldName:"rotationType",label:"Type",labelTooltip:"<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div>Standard: Priority Rotation</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div>Custom: Highest spell that is ready will be cast.</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>",values:[{name:"Standard",value:o.Priority},{name:"Custom",value:o.Custom}]}),A({fieldName:"customRotation",numColumns:2,values:[{actionId:t.fromSpellId(49238),value:l.LightningBolt},{actionId:t.fromSpellId(49238),value:l.LightningBoltWeave,text:"Weave"},{actionId:t.fromSpellId(49238),value:l.LightningBoltDelayedWeave,text:"Delay"},{actionId:t.fromSpellId(17364),value:l.StormstrikeDebuffMissing,text:"Debuff"},{actionId:t.fromSpellId(17364),value:l.Stormstrike},{actionId:t.fromSpellId(49233),value:l.FlameShock},{actionId:t.fromSpellId(49231),value:l.EarthShock},{actionId:t.fromSpellId(58734),value:l.MagmaTotem},{actionId:t.fromSpellId(61657),value:l.FireNova},{actionId:t.fromSpellId(60103),value:l.LavaLash},{actionId:t.fromSpellId(49281),value:l.LightningShield},{actionId:t.fromSpellId(60043),value:l.LavaBurst,text:"Weave"},{actionId:t.fromSpellId(49236),value:l.FrostShock}],showWhen:t=>t.getRotation().rotationType==o.Custom}),x({fieldName:"primaryShock",label:"Primary Shock",values:[{name:"None",value:s.None},{name:"Earth Shock",value:s.Earth},{name:"Frost Shock",value:s.Frost}],showWhen:t=>t.getRotation().rotationType!=o.Custom}),H({fieldName:"weaveFlameShock",label:"Weave Flame Shock",labelTooltip:"Use Flame Shock whenever the target does not already have the DoT.",showWhen:t=>t.getRotation().rotationType!=o.Custom}),j({fieldName:"flameShockClipTicks",label:"Refresh Flame Shock at ticks remaining",labelTooltip:"Set to 0 to require the debuff be missing. A tick is 3s, affected by spell haste",enableWhen:t=>t.getRotation().weaveFlameShock,showWhen:t=>t.getRotation().rotationType==o.Custom?null!=t.getRotation().customRotation?.spells.find((t=>t.spell==l.FlameShock)):t.getRotation().weaveFlameShock}),H({fieldName:"lightningboltWeave",label:"Enable Weaving Lightning Bolt",labelTooltip:"Will provide a DPS increase, but is harder to execute",enableWhen:t=>t.getTalents().maelstromWeapon>0,showWhen:t=>t.getRotation().rotationType!=o.Custom}),x({fieldName:"maelstromweaponMinStack",label:"Minimum Maelstrom Stacks to Weave",labelTooltip:"3 stacks is the most realistic, however there are cases where lower might be possible, just much harder to do in practice",values:[{name:"1",value:1},{name:"2",value:2},{name:"3",value:3},{name:"4",value:4}],enableWhen:t=>t.getRotation().rotationType==o.Custom?null!=t.getRotation().customRotation?.spells.find((t=>t.spell==l.LightningBoltWeave)):t.getRotation().lightningboltWeave,showWhen:t=>t.getRotation().rotationType!=o.Custom||null!=t.getRotation().customRotation?.spells.find((t=>t.spell==l.LightningBoltWeave))}),j({fieldName:"autoWeaveDelay",label:"Weaving Delay After Auto Attack",labelTooltip:"The amount of time to wait after an auto attack before weaveing, in milliseconds",enableWhen:t=>t.getRotation().rotationType==o.Custom?null!=t.getRotation().customRotation?.spells.find((t=>t.spell==l.LightningBoltWeave)):t.getRotation().lightningboltWeave,showWhen:t=>t.getRotation().rotationType!=o.Custom||null!=t.getRotation().customRotation?.spells.find((t=>t.spell==l.LightningBoltWeave))}),j({fieldName:"delayGcdWeave",label:"Delay LL to Weave",labelTooltip:"The amount of time to hold Lava Lash to weave in milliseconds. Setting to 0 will disable delaying",enableWhen:t=>t.getRotation().rotationType!=o.Custom&&t.getRotation().lightningboltWeave,showWhen:t=>t.getRotation().rotationType!=o.Custom}),j({fieldName:"delayGcdWeave",label:"Delay Weave Time",labelTooltip:"The amount of time to hold a GCD to weave in milliseconds. Setting to 0 will disable delaying",enableWhen:t=>t.getRotation().rotationType==o.Custom&&null!=t.getRotation().customRotation?.spells.find((t=>t.spell==l.LightningBoltDelayedWeave)),showWhen:t=>t.getRotation().rotationType==o.Custom&&null!=t.getRotation().customRotation?.spells.find((t=>t.spell==l.LightningBoltDelayedWeave))}),H({fieldName:"lavaburstWeave",label:"Enable Weaving Lava Burst",labelTooltip:"Not particularily useful for dual wield, mostly a 2h option",enableWhen:t=>t.getRotation().lightningboltWeave,showWhen:t=>t.getRotation().rotationType!=o.Custom}),j({fieldName:"firenovaManaThreshold",label:"Minimum mana to cast Fire Nova",labelTooltip:"Fire Nova will not be cast when mana is below this value. Set this medium-low, it has a bad mana-to-damage ratio",showWhen:t=>t.getRotation().rotationType!=o.Custom||null!=t.getRotation().customRotation?.spells.find((t=>t.spell==l.FireNova))}),j({fieldName:"shamanisticRageManaThreshold",label:"Mana % to use Shamanistic Rage",enableWhen:t=>t.getTalents().shamanisticRage})]},it={name:"Standard",data:r.create({talentsString:"053030152-30405003105021333031131031051",glyphs:d.create({major1:m.GlyphOfStormstrike,major2:m.GlyphOfFlametongueWeapon,major3:m.GlyphOfFeralSpirit})})},ot=h.create({totems:c.create({earth:g.StrengthOfEarthTotem,air:u.WindfuryTotem,fire:p.MagmaTotem,water:f.ManaSpringTotem,useFireElemental:!0}),maelstromweaponMinStack:3,lightningboltWeave:!0,autoWeaveDelay:500,delayGcdWeave:750,lavaburstWeave:!1,firenovaManaThreshold:3e3,shamanisticRageManaThreshold:25,primaryShock:s.Earth,weaveFlameShock:!0,rotationType:o.Priority,customRotation:S.create({spells:[v.create({spell:l.LightningBolt}),v.create({spell:l.StormstrikeDebuffMissing}),v.create({spell:l.LightningBoltWeave}),v.create({spell:l.Stormstrike}),v.create({spell:l.FlameShock}),v.create({spell:l.EarthShock}),v.create({spell:l.MagmaTotem}),v.create({spell:l.LightningShield}),v.create({spell:l.FireNova}),v.create({spell:l.LightningBoltDelayedWeave}),v.create({spell:l.LavaLash})]})}),lt=b.create({shield:e.LightningShield,bloodlust:!0,imbueMh:n.WindfuryWeapon,imbueOh:n.FlametongueWeapon,syncType:a.SyncMainhandOffhandSwings}),st=y.create({defaultPotion:W.PotionOfSpeed,flask:I.FlaskOfEndlessRage,food:w.FoodFishFeast}),rt=T.create({giftOfTheWild:R.TristateEffectImproved,arcaneBrilliance:!0,leaderOfThePack:R.TristateEffectImproved,totemOfWrath:!0,wrathOfAirTotem:!0,moonkinAura:R.TristateEffectImproved,sanctifiedRetribution:!0,divineSpirit:!0,battleShout:R.TristateEffectImproved}),dt=k.create({bloodFrenzy:!0,sunderArmor:!0,curseOfWeakness:R.TristateEffectRegular,curseOfElements:!0,faerieFire:R.TristateEffectImproved,judgementOfWisdom:!0,misery:!0,totemOfWrath:!0,shadowMastery:!0}),mt={name:"Preraid Preset",tooltip:G,gear:F.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 43311,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42156\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40678\n\t\t},\n\t\t{\n\t\t\t"id": 37373,\n\t\t\t"enchant": 3808\n\t\t},\n\t\t{\n\t\t\t"id": 37840,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 39597,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40053,\n\t\t\t\t40088\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 43131,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39601,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40053,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37407,\n\t\t\t"gems": [\n\t\t\t\t42156\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37669,\n\t\t\t"enchant": 3823\n\t\t},\n\t\t{\n\t\t\t"id": 37167,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40053,\n\t\t\t\t42156\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37685\n\t\t},\n\t\t{\n\t\t\t"id": 37642\n\t\t},\n\t\t{\n\t\t\t"id": 37390\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 41384,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{\n\t\t\t"id": 40704,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{\n\t\t\t"id": 33507\n\t\t}\n\t]}')},ht={name:"P1 Preset",tooltip:G,gear:F.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40543,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t40014\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44661,\n\t\t\t"gems": [\n\t\t\t\t40014\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40524,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t40014\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 40523,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40003,\n\t\t\t\t40014\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40282,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t42702,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40520,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t42154,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40275,\n\t\t\t"gems": [\n\t\t\t\t42156\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40522,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39999,\n\t\t\t\t42156\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40367,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40058\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40474\n\t\t},\n\t\t{\n\t\t\t"id": 40074\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 37390\n\t\t},\n\t\t{\n\t\t\t"id": 39763,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{\n\t\t\t"id": 39468,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{\n\t\t\t"id": 40322\n\t\t}\n\t]}')},ct={name:"P2 Preset FT",tooltip:G,gear:F.fromJsonString('{ "items": [\n        {\n          "id": 45610,\n          "enchant": 3817,\n          "gems": [\n            41398,\n            42702\n          ]\n        },\n        {\n          "id": 45517,\n          "gems": [\n            39999\n          ]\n        },\n        {\n          "id": 46203,\n          "enchant": 3808,\n          "gems": [\n            39999\n          ]\n        },\n        {\n          "id": 45461,\n          "enchant": 3831,\n          "gems": [\n            40014\n          ]\n        },\n        {\n          "id": 46205,\n          "enchant": 3832,\n          "gems": [\n            40058,\n            40053\n          ]\n        },\n        {\n          "id": 45460,\n          "enchant": 3845,\n          "gems": [\n            39999,\n            0\n          ]\n        },\n        {\n          "id": 46200,\n          "enchant": 3604,\n          "gems": [\n            40014,\n            0\n          ]\n        },\n        {\n          "id": 45553,\n          "gems": [\n            36766,\n            36766,\n            36766\n          ]\n        },\n        {\n          "id": 46208,\n          "enchant": 3823,\n          "gems": [\n            39999,\n            39999\n          ]\n        },\n        {\n          "id": 45989,\n          "enchant": 3606,\n          "gems": [\n            40053,\n            39999\n          ]\n        },\n        {\n          "id": 45456,\n          "gems": [\n            39999\n          ]\n        },\n        {\n          "id": 46046,\n          "gems": [\n            40053\n          ]\n        },\n        {\n          "id": 45609\n        },\n        {\n          "id": 46038\n        },\n        {\n          "id": 45612,\n          "enchant": 3789,\n          "gems": [\n            39999\n          ]\n        },\n        {\n          "id": 46097,\n          "enchant": 3789,\n          "gems": [\n            40003\n          ]\n        },\n        {\n          "id": 40322\n        }\n      ]\n    }')},gt={name:"P2 Preset WF",tooltip:G,gear:F.fromJsonString('{  "items": [\n        {\n          "id": 45610,\n          "enchant": 3817,\n          "gems": [\n            41398,\n            42702\n          ]\n        },\n        {\n          "id": 45517,\n          "gems": [\n            39999\n          ]\n        },\n        {\n          "id": 46203,\n          "enchant": 3808,\n          "gems": [\n            39999\n          ]\n        },\n        {\n          "id": 45461,\n          "enchant": 3831,\n          "gems": [\n            40052\n          ]\n        },\n        {\n          "id": 46205,\n          "enchant": 3832,\n          "gems": [\n            40052,\n            40052\n          ]\n        },\n        {\n          "id": 45460,\n          "enchant": 3845,\n          "gems": [\n            39999,\n            0\n          ]\n        },\n        {\n          "id": 46200,\n          "enchant": 3604,\n          "gems": [\n            40053,\n            0\n          ]\n        },\n        {\n          "id": 45553,\n          "gems": [\n            36766,\n            36766,\n            36766\n          ]\n        },\n        {\n          "id": 46208,\n          "enchant": 3823,\n          "gems": [\n            39999,\n            39999\n          ]\n        },\n        {\n          "id": 45989,\n          "enchant": 3606,\n          "gems": [\n            40053,\n            39999\n          ]\n        },\n        {\n          "id": 45456,\n          "gems": [\n            39999\n          ]\n        },\n        {\n          "id": 45608,\n          "gems": [\n            39999\n          ]\n        },\n        {\n          "id": 45609\n        },\n        {\n          "id": 46038\n        },\n        {\n          "id": 45132,\n          "enchant": 3789,\n          "gems": [\n            40052\n          ]\n        },\n        {\n          "id": 46097,\n          "enchant": 3789,\n          "gems": [\n            39999\n          ]\n        },\n        {\n          "id": 40322\n        }\n      ]\n    }')};class ut extends J{constructor(t,e){super(t,e,{cssClass:"enhancement-shaman-sim-ui",cssScheme:"shaman",knownIssues:["Fire Elemental is in a alpha state","Some things regarding weapon imbues need further testing and changes"],epStats:[M.StatIntellect,M.StatAgility,M.StatStrength,M.StatAttackPower,M.StatMeleeHit,M.StatMeleeCrit,M.StatMeleeHaste,M.StatArmorPenetration,M.StatExpertise,M.StatSpellPower,M.StatSpellCrit,M.StatSpellHit,M.StatSpellHaste],epPseudoStats:[N.PseudoStatMainHandDps,N.PseudoStatOffHandDps],epReferenceStat:M.StatAttackPower,displayStats:[M.StatHealth,M.StatStamina,M.StatStrength,M.StatAgility,M.StatIntellect,M.StatAttackPower,M.StatMeleeHit,M.StatMeleeCrit,M.StatMeleeHaste,M.StatExpertise,M.StatArmorPenetration,M.StatSpellPower,M.StatSpellHit,M.StatSpellCrit,M.StatSpellHaste],defaults:{gear:ht.gear,epWeights:P.fromMap({[M.StatIntellect]:1.48,[M.StatAgility]:1.59,[M.StatStrength]:1.1,[M.StatSpellPower]:1.13,[M.StatSpellHit]:0,[M.StatSpellCrit]:.91,[M.StatSpellHaste]:.37,[M.StatAttackPower]:1,[M.StatMeleeHit]:1.38,[M.StatMeleeCrit]:.81,[M.StatMeleeHaste]:1.61,[M.StatArmorPenetration]:.48,[M.StatExpertise]:0},{[N.PseudoStatMainHandDps]:5.21,[N.PseudoStatOffHandDps]:2.21}),consumes:st,rotation:ot,talents:it.data,specOptions:lt,raidBuffs:rt,partyBuffs:E.create({}),individualBuffs:C.create({blessingOfKings:!0,blessingOfWisdom:R.TristateEffectImproved,blessingOfMight:R.TristateEffectImproved,judgementsOfTheWise:!0}),debuffs:dt},playerIconInputs:[Y,X,Z,tt],rotationInputs:at,includeBuffDebuffInputs:[_,K,q,z],excludeBuffDebuffInputs:[Q],otherInputs:{inputs:[et,U,$]},customSections:[V],encounterPicker:{showExecuteProportion:!1},presets:{talents:[it],gear:[mt,ht,ct,gt]}})}}export{ot as D,ut as E,ht as P,it as S,lt as a,st as b,ct as c};
//# sourceMappingURL=sim-f2a6c861.chunk.js.map
