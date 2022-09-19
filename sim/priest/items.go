package priest

import (
	"strconv"
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

var ItemSetAbsolution = core.NewItemSet(core.ItemSet{
	Name: "Absolution Regalia",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// Implemented in swp.go
		},
		4: func(agent core.Agent) {
			// Implemented in mindblast.go
		},
	},
})

var ItemSetVestmentsOfAbsolution = core.NewItemSet(core.ItemSet{
	Name: "Vestments of Absolution",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// Implemented in prayer_of_healing.go
		},
		4: func(agent core.Agent) {
			// Implemented in greater_heal.go
		},
	},
})

var ItemSetValorous = core.NewItemSet(core.ItemSet{
	Name: "Garb of Faith",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// this is implemented in mind_blast.go
		},
		4: func(agent core.Agent) {
			// this is implemented in shadow_word_death.go
		},
	},
})

var ItemSetRegaliaOfFaith = core.NewItemSet(core.ItemSet{
	Name: "Regalia of Faith",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// Implemented in prayer_of_mending.go
		},
		4: func(agent core.Agent) {
			// Implemented in greater_heal.go
		},
	},
})

var ItemSetConquerorSanct = core.NewItemSet(core.ItemSet{
	Name: "Sanctification Garb",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// Implemented in devouring_plague.go
		},
		4: func(agent core.Agent) {
			priest := agent.(PriestAgent).GetPriest()
			procAura := priest.NewTemporaryStatsAura("Devious Mind", core.ActionID{ItemID: 64907}, stats.Stats{stats.SpellHaste: 240}, time.Second*4)

			priest.RegisterAura(core.Aura{
				Label:    "Devious Mind Proc",
				Duration: core.NeverExpires,
				OnReset: func(aura *core.Aura, sim *core.Simulation) {
					aura.Activate(sim)
				},
				// TODO: Does this affect the spell that procs it?
				OnCastComplete: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell) {
					if spell == priest.MindBlast {
						procAura.Activate(sim)
					}
				},
			})
		},
	},
})

var ItemSetSanctificationRegalia = core.NewItemSet(core.ItemSet{
	Name: "Sanctification Regalia",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
		},
		4: func(agent core.Agent) {
			priest := agent.(PriestAgent).GetPriest()
			procAura := priest.NewTemporaryStatsAura("Sanctification Reglia 4pc", core.ActionID{SpellID: 64912}, stats.Stats{stats.SpellPower: 250, stats.HealingPower: 250}, time.Second*5)

			priest.RegisterAura(core.Aura{
				Label:    "Sancitifcation Reglia 4pc",
				Duration: core.NeverExpires,
				OnReset: func(aura *core.Aura, sim *core.Simulation) {
					aura.Activate(sim)
				},
				// TODO: Does this affect the spell that procs it?
				OnCastComplete: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell) {
					if spell == priest.PowerWordShield {
						procAura.Activate(sim)
					}
				},
			})
		},
	},
})

var ItemSetZabras = core.NewItemSet(core.ItemSet{
	Name: "Zabra's Regalia",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// Implemented in vampiric_touch.go
		},
		4: func(agent core.Agent) {
			// Implemented in mind_flay.go
		},
	},
})

var ItemSetZabrasRaiment = core.NewItemSet(core.ItemSet{
	Name:            "Zabra's Raiment",
	AlternativeName: "Velen's Raiment",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// Implemented in prayer_of_mending.go
		},
		4: func(agent core.Agent) {
			// Implemented in talents.go and renew.go
		},
	},
})

var ItemSetCrimsonAcolyte = core.NewItemSet(core.ItemSet{
	Name: "Crimson Acolyte's Regalia",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// Implemented in vampiric_touch.go/devouring_plague.go/swp.go
		},
		4: func(agent core.Agent) {
			// Implemented in mind_flay.go
		},
	},
})

var ItemSetCrimsonAcolytesRaiment = core.NewItemSet(core.ItemSet{
	Name: "Crimson Acolyte's Raiment",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			priest := agent.(PriestAgent).GetPriest()

			spell := priest.RegisterSpell(core.SpellConfig{
				ActionID:    core.ActionID{SpellID: 70770},
				SpellSchool: core.SpellSchoolHoly,
				Flags:       core.SpellFlagNoOnCastComplete | core.SpellFlagIgnoreModifiers,

				DamageMultiplier: 1,
				ThreatMultiplier: 1 - []float64{0, .07, .14, .20}[priest.Talents.SilentResolve],
			})

			hots := make([]*core.Dot, len(priest.Env.AllUnits))
			var curAmount float64
			for _, unit := range priest.Env.AllUnits {
				if !priest.IsOpponent(unit) {
					hots[unit.UnitIndex] = core.NewDot(core.Dot{
						Spell: spell,
						Aura: unit.RegisterAura(core.Aura{
							Label:    "CrimsonAcolyteRaiment2pc" + strconv.Itoa(int(priest.Index)),
							ActionID: spell.ActionID,
						}),
						NumberOfTicks: 3,
						TickLength:    time.Second * 3,
						TickEffects: core.TickFuncSnapshot(unit, core.SpellEffect{
							ProcMask:   core.ProcMaskPeriodicHealing,
							IsPeriodic: true,
							IsHealing:  true,

							BaseDamage: core.BuildBaseDamageConfig(func(sim *core.Simulation, spellEffect *core.SpellEffect, spell *core.Spell) float64 {
								return curAmount * 0.33
							}, 0),
							OutcomeApplier: priest.OutcomeFuncTick(),
						}),
					})
				}
			}

			priest.RegisterAura(core.Aura{
				Label:    "Crimson Acolytes Raiment 2pc",
				Duration: core.NeverExpires,
				OnReset: func(aura *core.Aura, sim *core.Simulation) {
					aura.Activate(sim)
				},
				OnHealDealt: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
					if spell != priest.FlashHeal || sim.RandomFloat("Crimson Acolytes Raiment 2pc") >= 0.33 {
						return
					}

					curAmount = spellEffect.Damage
					hot := hots[spellEffect.Target.UnitIndex]
					hot.Apply(sim)
				},
			})
		},
		4: func(agent core.Agent) {
			// Implemented in power_word_shield.go and circle_of_healing.go
		},
	},
})

var ItemSetGladiatorsInvestiture = core.NewItemSet(core.ItemSet{
	Name: "Gladiator's Investiture",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			agent.GetCharacter().AddStat(stats.Resilience, 100)
			agent.GetCharacter().AddStat(stats.SpellPower, 29)
			agent.GetCharacter().AddStat(stats.HealingPower, 29)
		},
		4: func(agent core.Agent) {
			agent.GetCharacter().AddStat(stats.SpellPower, 88)
			agent.GetCharacter().AddStat(stats.HealingPower, 88)
		},
	},
})
var ItemSetGladiatorsRaiment = core.NewItemSet(core.ItemSet{
	Name: "Gladiator's Raiment",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			agent.GetCharacter().AddStat(stats.Resilience, 100)
			agent.GetCharacter().AddStat(stats.SpellPower, 29)
			agent.GetCharacter().AddStat(stats.HealingPower, 29)
		},
		4: func(agent core.Agent) {
			agent.GetCharacter().AddStat(stats.SpellPower, 88)
			agent.GetCharacter().AddStat(stats.HealingPower, 88)
		},
	},
})

func init() {
	core.NewItemEffect(32490, func(agent core.Agent) {
		priest := agent.(PriestAgent).GetPriest()
		// Not in the game yet so cant test; this logic assumes that:
		// - procrate is 10%
		// - no ICD on proc
		const procrate = 0.1
		procAura := priest.NewTemporaryStatsAura("Ashtongue Talisman Proc", core.ActionID{ItemID: 32490}, stats.Stats{stats.SpellPower: 220}, time.Second*10)

		priest.RegisterAura(core.Aura{
			Label:    "Ashtongue Talisman",
			Duration: core.NeverExpires,
			OnReset: func(aura *core.Aura, sim *core.Simulation) {
				aura.Activate(sim)
			},
			OnPeriodicDamageDealt: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
				if spell != priest.ShadowWordPain {
					return
				}

				if sim.RandomFloat("Ashtongue Talisman of Acumen") > procrate {
					return
				}

				procAura.Activate(sim)
			},
		})
	})

}
