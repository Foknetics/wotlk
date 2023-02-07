import{A as t,c$ as n,cL as e,d0 as a,cM as i,c0 as s,P as o,j as l,d1 as r,bx as d,by as m,d2 as c,L as u,bF as f,bI as S,bK as h,bt as g,d as p,a6 as b,a as v,T as y,ao as I,a$ as O,al as P,K as A,ap as T}from"./detailed_results-bd7a1567.chunk.js";import{k as H,b as W,c as w,E,i as R,B as k,I as D,a4 as M,N as x,T as B,V as C,W as N,X as j,Z as G,Y as J,t as F}from"./individual_sim_ui-5d28cb06.chunk.js";const V=H({fieldName:"customRotation",numColumns:2,values:[{actionId:t.fromSpellId(53408),value:n.JudgementOfWisdom},{actionId:t.fromSpellId(48806),value:n.HammerOfWrath},{actionId:t.fromSpellId(48819),value:n.Consecration},{actionId:t.fromSpellId(48817),value:n.HolyWrath},{actionId:t.fromSpellId(48801),value:n.Exorcism},{actionId:t.fromSpellId(61411),value:n.ShieldOfRighteousness},{actionId:t.fromSpellId(48827),value:n.AvengersShield},{actionId:t.fromSpellId(53595),value:n.HammerOfTheRighteous},{actionId:t.fromSpellId(48952),value:n.HolyShield}]}),z={inputs:[W({fieldName:"hammerFirst",label:"Open with HotR",labelTooltip:"Open with Hammer of the Righteous instead of Shield of Righteousness in the standard rotation. Recommended for AoE."}),W({fieldName:"squeezeHolyWrath",label:"Squeeze Holy Wrath",labelTooltip:"Squeeze a Holy Wrath cast during sufficiently hasted GCDs (Bloodlust) in the standard rotation."}),w({fieldName:"waitSlack",label:"Max Wait Time (ms)",labelTooltip:"Maximum time in milliseconds to prioritize waiting for next Hammer/Shield to maintain 969. Affects standard and custom priority."}),W({fieldName:"useCustomPrio",label:"Use custom priority",labelTooltip:"Deviates from the standard 96969 rotation, using the priority configured below. Will still attempt to keep a filler GCD between Hammer and Shield."}),V]},L=E({fieldName:"aura",label:"Aura",values:[{name:"None",value:e.NoPaladinAura},{name:"Devotion Aura",value:e.DevotionAura},{name:"Retribution Aura",value:e.RetributionAura}]}),q=E({fieldName:"seal",label:"Seal",labelTooltip:"The seal active before encounter",values:[{name:"Vengeance",value:a.Vengeance},{name:"Command",value:a.Command}]}),K=E({fieldName:"judgement",label:"Judgement",labelTooltip:"Judgement debuff you will use on the target during the encounter.",values:[{name:"Wisdom",value:i.JudgementOfWisdom},{name:"Light",value:i.JudgementOfLight}]}),U=R({fieldName:"useAvengingWrath",label:"Use Avenging Wrath"}),_={name:"Baseline Example",data:s.create({talentsString:"-05005135200132311333312321-511302012003",glyphs:{major1:o.GlyphOfSealOfVengeance,major2:o.GlyphOfRighteousDefense,major3:o.GlyphOfDivinePlea,minor1:l.GlyphOfSenseUndead,minor2:l.GlyphOfLayOnHands,minor3:l.GlyphOfBlessingOfKings}})},$=r.create({hammerFirst:!1,squeezeHolyWrath:!0,waitSlack:300,useCustomPrio:!1,customRotation:d.create({spells:[m.create({spell:n.ShieldOfRighteousness}),m.create({spell:n.HammerOfTheRighteous}),m.create({spell:n.HolyShield}),m.create({spell:n.HammerOfWrath}),m.create({spell:n.Consecration}),m.create({spell:n.AvengersShield}),m.create({spell:n.JudgementOfWisdom}),m.create({spell:n.Exorcism})]})}),X=c.create({aura:e.RetributionAura,judgement:i.JudgementOfWisdom}),Y=u.create({flask:f.FlaskOfStoneblood,food:S.FoodDragonfinFilet,defaultPotion:h.IndestructiblePotion,prepopPotion:h.IndestructiblePotion}),Z={name:"Preraid Preset",tooltip:k,enableWhen:t=>!0,gear:g.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 42549,\n\t\t\t"enchant": 3818,\n\t\t\t"gems": [\n\t\t\t\t41396,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40679\n\t\t},\n\t\t{\n\t\t\t"id": 37635,\n\t\t\t"enchant": 3852,\n\t\t\t"gems": [\n\t\t\t\t40015\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44188,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 39638,\n\t\t\t"enchant": 1953,\n\t\t\t"gems": [\n\t\t\t\t36767,\n\t\t\t\t40089\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37682,\n\t\t\t"enchant": 3850,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39639,\n\t\t\t"enchant": 3860,\n\t\t\t"gems": [\n\t\t\t\t36767,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37379,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t40022,\n\t\t\t\t40008\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37292,\n\t\t\t"enchant": 3822,\n\t\t\t"gems": [\n\t\t\t\t40089\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44243,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 37186\n\t\t},\n\t\t{\n\t\t\t"id": 37257\n\t\t},\n\t\t{\n\t\t\t"id": 44063,\n\t\t\t"gems": [\n\t\t\t\t36767,\n\t\t\t\t40015\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37220\n\t\t},\n\t\t{\n\t\t\t"id": 37179,\n\t\t\t"enchant": 2673\n\t\t},\n\t\t{\n\t\t\t"id": 43085,\n\t\t\t"enchant": 3849\n\t\t},\n\t\t{\n\t\t\t"id": 40707\n\t\t}\n\t]}')},Q={name:"P1 Preset",tooltip:k,enableWhen:t=>!0,gear:g.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40581,\n\t\t\t"enchant": 3818,\n\t\t\t"gems": [\n\t\t\t\t41380,\n\t\t\t\t36767\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40387\n\t\t},\n\t\t{\n\t\t\t"id": 40584,\n\t\t\t"enchant": 3852,\n\t\t\t"gems": [\n\t\t\t\t40008\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40410,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 40579,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t36767,\n\t\t\t\t40022\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39764,\n\t\t\t"enchant": 3850,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40580,\n\t\t\t"enchant": 3860,\n\t\t\t"gems": [\n\t\t\t\t40008,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39759,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t40008,\n\t\t\t\t40008\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40589,\n\t\t\t"enchant": 3822\n\t\t},\n\t\t{\n\t\t\t"id": 39717,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40089\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40718\n\t\t},\n\t\t{\n\t\t\t"id": 40107\n\t\t},\n\t\t{\n\t\t\t"id": 44063,\n\t\t\t"gems": [\n\t\t\t\t36767,\n\t\t\t\t40089\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37220\n\t\t},\n\t\t{\n\t\t\t"id": 40345,\n\t\t\t"enchant": 3788\n\t\t},\n\t\t{\n\t\t\t"id": 40400,\n\t\t\t"enchant": 3849\n\t\t},\n\t\t{\n\t\t\t"id": 40707\n\t\t}\n\t]}')},tt={name:"P2 Preset",tooltip:k,enableWhen:t=>!0,gear:g.fromJsonString('{\n      "items": [\n        {\n          "id": 46175,\n          "enchant": 3818,\n          "gems": [\n            41380,\n            40088\n          ]\n        },\n        {\n          "id": 45485,\n          "gems": [\n            40088\n          ]\n        },\n        {\n          "id": 46177,\n          "enchant": 3852,\n          "gems": [\n            40034\n          ]\n        },\n        {\n          "id": 45496,\n          "enchant": 3605,\n          "gems": [\n            40034\n          ]\n        },\n        {\n          "id": 46039,\n          "enchant": 3832,\n          "gems": [\n            36767,\n            36767\n          ]\n        },\n        {\n          "id": 45111,\n          "enchant": 3850,\n          "gems": [\n            0\n          ]\n        },\n        {\n          "id": 45487,\n          "enchant": 3860,\n          "gems": [\n            40008,\n            40008,\n            0\n          ]\n        },\n        {\n          "id": 45825,\n          "enchant": 3601,\n          "gems": [\n            40008\n          ]\n        },\n        {\n          "id": 45594,\n          "enchant": 3822,\n          "gems": [\n            40034,\n            45880,\n            40088\n          ]\n        },\n        {\n          "id": 45988,\n          "enchant": 3606,\n          "gems": [\n            40008,\n            40008\n          ]\n        },\n        {\n          "id": 45471,\n          "gems": [\n            40088\n          ]\n        },\n        {\n          "id": 45326\n        },\n        {\n          "id": 45158\n        },\n        {\n          "id": 46021\n        },\n        {\n          "id": 45947,\n          "enchant": 3788,\n          "gems": [\n            40088\n          ]\n        },\n        {\n          "id": 45587,\n          "enchant": 3849,\n          "gems": [\n            36767\n          ]\n        },\n        {\n          "id": 45145\n        }\n      ]\n    }')};class nt extends D{constructor(t,n){super(t,n,{cssClass:"protection-paladin-sim-ui",cssScheme:"paladin",knownIssues:[],epStats:[p.StatStamina,p.StatStrength,p.StatAgility,p.StatAttackPower,p.StatMeleeHit,p.StatSpellHit,p.StatMeleeCrit,p.StatExpertise,p.StatMeleeHaste,p.StatArmorPenetration,p.StatSpellPower,p.StatArmor,p.StatDefense,p.StatBlock,p.StatBlockValue,p.StatDodge,p.StatParry,p.StatResilience],epPseudoStats:[b.PseudoStatMainHandDps],epReferenceStat:p.StatSpellPower,displayStats:[p.StatHealth,p.StatArmor,p.StatStamina,p.StatStrength,p.StatAgility,p.StatAttackPower,p.StatMeleeHit,p.StatMeleeCrit,p.StatMeleeHaste,p.StatExpertise,p.StatArmorPenetration,p.StatSpellPower,p.StatSpellHit,p.StatDefense,p.StatBlock,p.StatBlockValue,p.StatDodge,p.StatParry,p.StatResilience],modifyDisplayStats:t=>{let n=new v;return y.freezeAllAndDo((()=>{t.getMajorGlyphs().includes(o.GlyphOfSealOfVengeance)&&t.getSpecOptions().seal==a.Vengeance&&(n=n.addStat(p.StatExpertise,10*M))})),{talents:n}},defaults:{gear:tt.gear,epWeights:v.fromMap({[p.StatArmor]:.07,[p.StatStamina]:1.14,[p.StatStrength]:1,[p.StatAgility]:.62,[p.StatAttackPower]:.26,[p.StatExpertise]:.69,[p.StatMeleeHit]:.79,[p.StatMeleeCrit]:.3,[p.StatMeleeHaste]:.17,[p.StatArmorPenetration]:.04,[p.StatSpellPower]:.13,[p.StatBlock]:.52,[p.StatBlockValue]:.28,[p.StatDodge]:.46,[p.StatParry]:.61,[p.StatDefense]:.54},{[b.PseudoStatMainHandDps]:3.33}),consumes:Y,rotation:$,talents:_.data,specOptions:X,raidBuffs:I.create({giftOfTheWild:O.TristateEffectImproved,powerWordFortitude:O.TristateEffectImproved,strengthOfEarthTotem:O.TristateEffectImproved,arcaneBrilliance:!0,unleashedRage:!0,leaderOfThePack:O.TristateEffectRegular,icyTalons:!0,totemOfWrath:!0,demonicPact:500,swiftRetribution:!0,moonkinAura:O.TristateEffectRegular,sanctifiedRetribution:!0,manaSpringTotem:O.TristateEffectRegular,bloodlust:!0,thorns:O.TristateEffectImproved,devotionAura:O.TristateEffectImproved,shadowProtection:!0}),partyBuffs:P.create({}),individualBuffs:A.create({blessingOfKings:!0,blessingOfSanctuary:!0,blessingOfWisdom:O.TristateEffectImproved,blessingOfMight:O.TristateEffectImproved}),debuffs:T.create({judgementOfWisdom:!0,judgementOfLight:!0,misery:!0,faerieFire:O.TristateEffectImproved,ebonPlaguebringer:!0,totemOfWrath:!0,shadowMastery:!0,bloodFrenzy:!0,mangle:!0,exposeArmor:!0,sunderArmor:!0,vindication:!0,thunderClap:O.TristateEffectImproved,insectSwarm:!0})},playerIconInputs:[],rotationInputs:z,includeBuffDebuffInputs:[x],excludeBuffDebuffInputs:[],otherInputs:{inputs:[B,C,N,j,G,J,L,U,K,q,F]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[_],gear:[Z,Q,tt]}})}}export{$ as D,_ as G,nt as P,X as a,Y as b,Q as c,tt as d};
//# sourceMappingURL=sim-2bba18b2.chunk.js.map
